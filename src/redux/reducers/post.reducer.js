import produce from 'immer';
import { Post } from '../../models/Post';
import createReducer from './reducerUtils';

const initialState = {
    currentPost: Post(),
    posts: [],


}
const post = {

    setPostData:(state, action) => {
        const { key, value } = action.payload;
        state.currentPost[key] = value;
    },
    setAppendToFormData:(state, action) => {
        const { key, file } = action.payload;
        state.currentPost.formData.append(key,file);
    },

    savePostName: (state, action) => {
        state.currentPost.postName=action.payload.title;
    },

    saveDescription: (state, action) => {
        state.currentPost.description=action.payload.description;
    },

    

}
export default produce(
    (state, action) => createReducer(state, action, post)
    , initialState);