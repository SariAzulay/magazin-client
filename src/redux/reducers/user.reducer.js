import produce from 'immer';
import { User } from '../../models/User';
import createReducer from './reducerUtils';

const initialState = {
    currentUser:User()
}
const user={

}
export default produce(
    (state, action) => createReducer(state,action,user)
    ,initialState);