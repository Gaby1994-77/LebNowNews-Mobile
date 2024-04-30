import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import PostItem from '../../components/organisms/PostItem';
import styles from './SavedNews.Styles';
import {RootState} from '../../redux/store';

const selectSavedPosts = createSelector(
  [(state: RootState) => state.savedPosts.savedPosts],
  savedPosts => [...savedPosts].reverse(),
);

const ProfileScreen: React.FC = () => {
  const savedPosts = useSelector(selectSavedPosts);

  return (
    <View style={styles.container}>
      <ScrollView>
        {savedPosts.map(post => (
          <PostItem key={post._id} item={post} isSavedView={true} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
