
import { IBooksStore } from '../types';
import { SET_BOOK, SET_BOOKS, SET_COUNT_TOTAL, SET_SEARCH_VALUE } from '../actionTypes/booksActionTypes';

const initialState = {
    books: [],
    countTotal: 0,
    searchValue: '',
    oneBook: null,



}

const booksReducer = (state: IBooksStore = initialState, action: any) => {
    switch (action.type) {
        case SET_COUNT_TOTAL: {
            const { total } = action;
            return ({
                ...state,
                countTotal: total,
            })
        }
        case SET_SEARCH_VALUE: {
            const { value } = action;
            console.log(action)
            return ({
                ...state,
                searchValue: value,
            })
        }
        case SET_BOOKS: {
            const { books } = action;
            return ({
                ...state,
                books,
            })
        }
        case SET_BOOK: {
            const { book } = action;
            return ({
                ...state,
                oneBook: book,
            })
        }

        default: return state;
    }
}

export { booksReducer };