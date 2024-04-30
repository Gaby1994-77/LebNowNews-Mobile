import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import savedPostsReducer from './savedPostsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  savedPosts: savedPostsReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
});
export type {RootState};
