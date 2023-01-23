
import { IBooksStore } from '../types';
import { ADD_BOOK, REMOVE_BOOK, SET_BOOK, SET_BOOKS, SET_BOOKS_CART, SET_COUNT_TOTAL, SET_SEARCH_VALUE, SET_TOTAL_BOOKS_CART } from '../actionTypes/booksActionTypes';

const initialState = {
    books: [],
    countTotal: 0,
    searchValue: '',
    oneBook: null,
    booksInBasket: [],
    totalBooksBasket: 0,
    bookscart: [],




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
        case ADD_BOOK: {
            const { isbn13 } = action;
            return ({
                ...state,
                booksInBasket: [...state.booksInBasket, isbn13],

            })
        }
        case REMOVE_BOOK: {
            const { isbn13 } = action;
            return ({
                ...state,
                booksInBasket: state.booksInBasket.filter((el) => el !== isbn13),

            })
        }
        case SET_TOTAL_BOOKS_CART: {
            const { isbn13 } = action;
            return ({
                ...state,
                totalBooksBasket: state.booksInBasket.filter((el) => el !== isbn13).length,

            })
        }
        case SET_BOOKS_CART: {
            const { bookscart } = action;
            return ({
                ...state,
                bookscart,


            })
        }

        default: return state;
    }
}

export { booksReducer };