import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  RefreshControl,
  Alert,
  View,
  ActivityIndicator,
  Text,
  Button,
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import styles from '../HomeScreen/HomeScreen.Styles';
import PostItem from '../../components/organisms/PostItem';
import {setToken} from '../../redux/authActions';
import {baseUrl} from '../../utilities/api';

interface Post {
  _id: string;
  title: string;
  link: string;
  description: string;
  image_url: string;
  video_url: string;
  source_url: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const HomeScreen: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const refreshToken = useSelector(
    (state: RootState) => state.auth.refreshToken,
  );
  const dispatch = useDispatch();

  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshAttempted, setRefreshAttempted] = useState(false);
  const flatListRef = useRef(null);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token, pagination.currentPage]);

  const fetchData = async () => {
    setRefreshing(true);
    try {
      const response = await axios.get(`${baseUrl}posts`, {
        headers: {Authorization: `Bearer ${token}`},
        params: {
          page: pagination.currentPage,
          pageSize: 10,
        },
      });
      setPosts(response.data.results);
      setPagination({
        currentPage: response.data.pagination.currentPage,
        totalPages: response.data.pagination.totalPages,
        hasNextPage: response.data.pagination.hasNextPage,
        hasPrevPage: response.data.pagination.hasPrevPage,
      });
      scrollToTop();
    } catch (error) {
      if (
        error.response &&
        error.response.status === 403 &&
        !refreshAttempted
      ) {
        setRefreshAttempted(true);
        await refreshAccessToken();
      } else {
        Alert.alert('Error', 'Failed to fetch posts. Please try again later.');
      }
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post(`${baseUrl}refresh-token`, {
        refreshToken,
      });
      const newAccessToken = response.data.accessToken;
      console.log('Token refreshed successfully:', newAccessToken);
      dispatch(setToken(newAccessToken));
      setRefreshAttempted(false);
    } catch (error) {
      console.error('Failed to refresh token:', error);
      Alert.alert(
        'Error',
        'Failed to refresh access token. Please login again.',
      );
    }
  };

  const handleNextPage = () => {
    if (pagination.hasNextPage) {
      setPagination(prevPagination => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage + 1,
      }));
    }
  };

  const handlePrevPage = () => {
    if (pagination.hasPrevPage) {
      setPagination(prevPagination => ({
        ...prevPagination,
        currentPage: prevPagination.currentPage - 1,
      }));
    }
  };

  const onManualRefresh = () => {
    setRefreshAttempted(false);
    fetchData();
  };

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({animated: true, offset: 0});
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator size="large" color="#689F38" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={flatListRef}
        style={styles.flatList}
        data={posts}
        renderItem={({item}) => <PostItem item={item} />}
        keyExtractor={item => item._id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onManualRefresh}
            colors={['#9Bd35A', '#689F38']}
            tintColor="#689F38"
            title="Pull to refresh"
            titleColor="#689F38"
          />
        }
      />
      <View style={styles.pagination}>
        <Button
          title="Previous Page"
          onPress={handlePrevPage}
          disabled={!pagination.hasPrevPage}
        />
        <Text>
          {pagination.currentPage} / {pagination.totalPages}
        </Text>
        <Button
          title="Next Page"
          onPress={handleNextPage}
          disabled={!pagination.hasNextPage}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
