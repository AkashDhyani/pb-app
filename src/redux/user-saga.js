import {put,takeEvery} from 'redux-saga/effects'
import {
    getUserRequest,
    getUserSuccess,
    getUserFailure
} from './actions'
import Api from './services/axios'

function* _getUserRequest({payload}){
    try{
        let uri = '/users' + '?'
        if ('currentPage' in payload){
            uri += 'page=' + payload.currentPage
            if ('records' in payload){
                uri += '&per_page=' + payload.records
            }
        }
        const {data} = yield Api.get(uri)
        const row = data
        yield put(getUserSuccess(row))
    }
    catch (e){
        yield put(getUserFailure(e.response.data))
    }
} 

export const userSagas = [
    takeEvery(getUserRequest, _getUserRequest)
]