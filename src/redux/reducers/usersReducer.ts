// import { LOG_OUT, SET_USER } from '../actionTypes/userActionTypes';

// const initial_state = {
//     user: null,
// };

// const userReducer = (state = initial_state, action: any) => {
//     switch (action.type) {
//         case SET_USER: {
//             const { user } = action;
//             console.log(user)
//             return ({
//                 ...state,
//                 user,
//             })
//         }
//         case LOG_OUT: {
//             return ({
//                 ...state,
//                 user: null,
//             })
//         }
//         default: return state;
//     }
// }

// export { userReducer }

import { LOG_OUT, SET_USER } from './../actionTypes/userActionTypes';

const initial_state = {
    user: null,
};

const userReducer = (state = initial_state, action: any) => {
    switch (action.type) {
        case SET_USER: {
            const { user } = action;
            console.log(user)
            return ({
                ...state,
                user,
            })
        }
        case LOG_OUT: {
            return ({
                ...state,
                user: null,
            })
        }
        default: return state;
    }
}

export { userReducer }