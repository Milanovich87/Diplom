import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { booksReducer } from './reducers/booksReducers';
import { all } from 'redux-saga/effects'
import { settingsReducer } from './reducers/settingsReducer';

import { watcherBooks } from './actionCreators/booksActionCreators';

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherBooks(),

    ])
}

const rootReducer = combineReducers({
    books: booksReducer,
    settings: settingsReducer,

})

export default createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);