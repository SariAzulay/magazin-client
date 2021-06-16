import produce from 'immer';
import { Magazin } from '../../models/Magazin';
import createReducer from './reducerUtils';

const initialState = {
    currentMagazin:Magazin(),
    magazins:[]
}
const magazin={

}
export default produce(
    (state, action) => createReducer(state,action,magazin)
    ,initialState);