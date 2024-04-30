import {PostActions, SAVE_POST, DELETE_POST, Post} from './savedPostsActions';

interface SavedPostsState {
  savedPosts: Post[];
}
const initialState: SavedPostsState = {
  savedPosts: [],
};
const savedPostsReducer = (
  state = initialState,
  action: PostActions,
): SavedPostsState => {
  switch (action.type) {
    case SAVE_POST:
      if (state.savedPosts.find(post => post._id === action.payload._id)) {
        return state;
      }
      return {
        ...state,
        savedPosts: [...state.savedPosts, action.payload],
      };

    case DELETE_POST:
      return {
        ...state,
        savedPosts: state.savedPosts.filter(
          post => post._id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
export default savedPostsReducer;
