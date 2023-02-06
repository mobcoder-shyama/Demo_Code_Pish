import {combineReducers} from 'redux'

// Reducers

import AuthReducers from './AuthReducers'

export const rootReducer = combineReducers({
    authReducer: AuthReducers,
});