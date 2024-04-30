import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {savePost, deletePost, Post} from '../../redux/savedPostsActions';
import {RootState} from '../../redux/store';
import styles from './PostItem.Styles';
import Toast from 'react-native-toast-message';
interface PostItemProps {
  item: Post;
  isSavedView?: boolean;
}
const PostItem: React.FC<PostItemProps> = ({item, isSavedView = false}) => {
  const dispatch = useDispatch();
  const savedPosts = useSelector(
    (state: RootState) => state.savedPosts.savedPosts,
  );
  const isAlreadySaved = savedPosts.some(post => post._id === item._id);
  const handlePress = () => {
    if (isSavedView) {
      dispatch(deletePost(item._id));
      Toast.show({
        type: 'success',
        text1: 'Deleted',
        text2: 'Post deleted successfully.',
      });
    } else {
      if (isAlreadySaved) {
        Toast.show({
          type: 'info',
          text1: 'Notice',
          text2: 'This post is already saved.',
        });
      } else {
        dispatch(savePost(item));
        Toast.show({
          type: 'success',
          text1: 'Saved',
          text2: 'Post saved successfully.',
        });
      }
    }
  };
  return (
    <View style={styles.card}>
      {item.image_url && (
        <Image style={styles.image} source={{uri: item.image_url}} />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={handlePress}>
        <Image
          source={
            isSavedView
              ? require('../../assests/icons/delete.png')
              : require('../../assests/icons/saveme.png')
          }
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};
export default PostItem;
