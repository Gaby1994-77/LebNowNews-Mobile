export const SAVE_POST = 'SAVE_POST';
export const DELETE_POST = 'DELETE_POST';

export interface SavePostAction {
  type: typeof SAVE_POST;
  payload: Post;
}
export interface DeletePostAction {
  type: typeof DELETE_POST;
  payload: string;
}
export interface Post {
  _id: string;
  title: string;
  description: string;
  image_url: string;
}
export const savePost = (post: Post): SavePostAction => ({
  type: SAVE_POST,
  payload: post,
});
export const deletePost = (postId: string): DeletePostAction => ({
  type: DELETE_POST,
  payload: postId,
});
export type PostActions = SavePostAction | DeletePostAction;
