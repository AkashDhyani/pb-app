import { handleActions } from 'redux-actions';
import {
    getUserRequest,
    getUserSuccess,
    getUserFailure
} from './actions'

const initialState = {
    loading: false,
    usersList: [],
    usersData: {}
};

const user = handleActions(
    {
        [getUserRequest]: (state) => ({
            ...state,
            loading: true,
        }),
        [getUserSuccess]: (state, {payload}) => {
            if (payload.page == 1){
                return {
                    ...state,
                    loading: false,
                    usersList: payload?.data,
                    usersData: payload
                }
            }
            else{
                return {
                    ...state,
                    loading: false,
                    usersList: [...state.usersList, ...payload.data],
                    usersData: payload
                }
            }
        },
        [getUserFailure]: (state) => ({
            ...state,
            loading: false,
            usersList: [],
            usersData: {}
        })
    },
    { ...initialState }
);

export default user;