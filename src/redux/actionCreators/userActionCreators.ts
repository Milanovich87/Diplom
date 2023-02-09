import { takeEvery, put } from 'redux-saga/effects';

import { ACTIVATION, SIGN_UP, SIGN_IN, SET_USER, LOG_OUT, GET_USER } from '../actionTypes/userActionTypes';

import { IUser, JwtResponse } from '../types';

const setUser = (user: IUser) => ({
    type: SET_USER,
    user,
})

const getUser = () => ({
    type: GET_USER,
})

const logOut = () => ({
    type: LOG_OUT,
})

const signup = (userInfo: IUser) => ({
    type: SIGN_UP,
    userInfo,
});

const signin = (userInfo: IUser, navigate: Function) => ({
    type: SIGN_IN,
    userInfo,
    navigate,
})

const activation = (activationInfo: any, navigate: Function) => ({
    type: ACTIVATION,
    activationInfo,
    navigate,
});

export function* getToken() {
    const token = localStorage.getItem('jwtAccess');
    if (token !== 'undefined') {
        const respVerify: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/verify/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ token }),
        });
        if (respVerify.status === 200) {
            return token
        } else {
            const refresh = localStorage.getItem('jwtRefresh');
            const respRefresh: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({ refresh }),
            });
            const data: JwtResponse = yield respRefresh.json();
            const { access } = data;
            localStorage.setItem('jwtAccess', access);
            return access;
        }
    }
    return ''
}

// saledek848@lubde.com
// Duda_hello_test
function* fetchSignUp(action: any) {
    const { userInfo } = action;
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userInfo),
    })
    const response: IUser = yield data.json();
    console.log(response);
}

function* fetchUserInfo() {
    const token: string = yield getToken();
    if (token) {
        const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${token}`,
            },
        });
        const user: IUser = yield data.json();
        yield put(setUser(user));
    }
}

function* fetchSignIn(action: any) {
    const { userInfo, navigate } = action;
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userInfo),
    })
    if (data.status === 200) {
        const jwt: JwtResponse = yield data.json();
        const { access, refresh } = jwt;
        localStorage.setItem('jwtAccess', access);
        localStorage.setItem('jwtRefresh', refresh);
        yield fetchUserInfo()
        navigate('/')
    } else {
        alert('No authorized')
    }
}

function* activateUser(action: any) {
    const { activationInfo, navigate } = action;

    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(activationInfo),
    })
    if (data.status < 300) {
        navigate('/success')
    } else {
        console.log('Error')
    }
}

function* watcherUser() {
    yield takeEvery(SIGN_UP, fetchSignUp);
    yield takeEvery(ACTIVATION, activateUser);
    yield takeEvery(SIGN_IN, fetchSignIn);
    yield takeEvery(GET_USER, fetchUserInfo);
}

export {
    watcherUser,
    signup,
    activation,
    signin,
    logOut,
    getUser,
}