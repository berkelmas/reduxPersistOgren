import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import userReducer from './reducers/userReducer';

const userPersistConfig = {
 key: 'root1',
 storage: storage,
 stateReconciler: autoMergeLevel2,
 blacklist: ['password']
};

const rootReducer = combineReducers({
  userResponse : persistReducer(userPersistConfig, userReducer)
})

export const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);
