import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { booksReducer } from './reducers/booksReducers';
import { all } from 'redux-saga/effects'
import { settingsReducer } from './reducers/settingsReducer';

import { watcherBooks } from './actionCreators/booksActionCreators';
import { userReducer } from './reducers/usersReducer';
import { watcherUser } from './actionCreators/userActionCreators';

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherBooks(),
        watcherUser(),

    ])
}

const rootReducer = combineReducers({
    books: booksReducer,
    settings: settingsReducer,
    users: userReducer,


})


export default createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

// import { configureStore } from '@reduxjs/toolkit';
// import { booksReducer } from './reducers/booksReducers';
// import cart from './cart/slice';
// import { settingsReducer } from './reducers/settingsReducer';
// import { useDispatch } from 'react-redux';

// export const store = configureStore({
//     reducer: {
//         booksReducer,
//         cart,
//         settingsReducer,
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();