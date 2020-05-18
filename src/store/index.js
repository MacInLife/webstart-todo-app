import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// On déclare le moteur de stockage utilisé par redux-persist
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const addTaskMemory = store => next => action => {
  console.log(action);
  next(action);
};
// On liste ici les middleware dont on a besoin
//
const middlewares = [thunk, addTaskMemory];
// composeWithDevTools() permet le debuggage dans React Native Debugger
//
// composeWithDevTools() permet le debuggage dans React Native Debugger
//
const enhancers = [composeWithDevTools({})(applyMiddleware(...middlewares))];
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);
