
import { SET_CURRENT_PAGE } from '../actionTypes/settingsActionTypes';
// import { TABS } from '../../components/Posts/constants'

const initial_state = {
    // activeTab: TABS.all,
    currentPage: 1,
    rowsPerPage: 5,
}

const settingsReducer = (state = initial_state, action: any) => {
    switch (action.type) {
        // case SET_ACTIVE_TAB: {
        //     const { activeTab } = action;
        //     return ({
        //         ...state,
        //         activeTab,
        //     })
        // }
        case SET_CURRENT_PAGE: {
            const { newPage } = action;
            return ({
                ...state,
                currentPage: newPage,
            })
        }
        default: return state;
    }
}

export { settingsReducer }