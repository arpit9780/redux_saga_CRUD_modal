import {applyMiddleware, legacy_createStore, compose} from 'redux';
import RootReducer from './RootReducer';
import createSagaMiddleware  from '@redux-saga/core'
import RootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = legacy_createStore(
    RootReducer, 
    composeEnhancers(applyMiddleware(sagaMiddleware)) 
    );
    sagaMiddleware.run(RootSaga)              
// console.log("store")
export default store




// import createSagaMiddleware from "@redux-saga/core";
// import { loginReducer } from "../redux/reducers/loginReducer"
// import { postReducer } from "../redux/reducers/postReducer";
// import RootSaga from "./saga";

// const sagaMiddleware = createSagaMiddleware();


// const store = legacy_createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(sagaMiddleware))
// );
// console.log("store")
// sagaMiddleware.run(RootSaga)              
// console.log("store")
// export default store;
