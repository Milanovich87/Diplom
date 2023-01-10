
import { SET_CURRENT_PAGE } from '../actionTypes/settingsActionTypes';

// const setActiveTab = (activeTab: string) => ({
//     type: SET_ACTIVE_TAB,
//     activeTab,
// });

const setCurrentPage = (newPage: number) => ({
    type: SET_CURRENT_PAGE,
    newPage,
});

export { setCurrentPage }