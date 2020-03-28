import {combineReducers} from 'redux';
import {searchFormReducer} from './searchForm';
import {favouritesReducer} from './favourites';
import {appReducer} from './app';

export const rootReducer = combineReducers({
    searchForm : searchFormReducer,
    favourites : favouritesReducer,
    app: appReducer
})