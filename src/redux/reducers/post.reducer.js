import produce from 'immer';
import { Post } from '../../models/Post';
import createReducer from './reducerUtils';

const initialState = {
    currentPost:Post(),
    posts:[]
}
const post={

}
export default produce(
    (state, action) => createReducer(state,action,post)
    ,initialState);