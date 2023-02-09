
import { IBooksStore } from '../types';
import { ADD_BOOK, ADD_FAVORITE, DELETE_ALL_BOOKS_CART, MINUS_BOOK_BASKET, PLUS_BOOK_BASKET, REMOVE_BOOK, REMOVE_FAVORITE, SET_BOOK, SET_BOOKS, SET_COUNT_TOTAL, SET_SEARCH_VALUE } from '../actionTypes/booksActionTypes';

const initialState = {
    books: [],
    countTotal: 0,
    searchValue: '',
    oneBook: null,
    booksInBasket: [],
    totalBooksBasket: 0,
    bookscart: [],
    book: [],
    price: [],
    priceTotal: [],
    favorites: [],
    bookSbasket: [],
    count: 0,
    items: [],
    totalPrice: 0
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
            const { book } = action;
            const findBook = state.booksInBasket.find((el) => el.isbn13 === book.isbn13);
            if (findBook) {

                findBook.count++;
                return {
                    ...state,
                    booksInBasket: [...state.booksInBasket],
                }
            } else {
                return {
                    ...state,
                    booksInBasket: [...state.booksInBasket, book],
                }
            }
        }
        case REMOVE_BOOK: {
            const { isbn13 } = action;
            return ({
                ...state,
                booksInBasket: state.booksInBasket.filter((el) => el.isbn13 !== isbn13),
            })
        }
        case PLUS_BOOK_BASKET: {
            const { id } = action;
            const itemCount = state.booksInBasket.find((item) => item.isbn13 === id);
            if (itemCount) {
                itemCount.count++;
            }
            return {
                ...state,
                booksInBasket: [...state.booksInBasket],
            };
        }
        case MINUS_BOOK_BASKET: {
            const { id } = action;
            const itemCount = state.booksInBasket.find((item) => item.isbn13 === id);
            itemCount.count--;
            return {
                ...state,
                booksInBasket: [...state.booksInBasket],
            };
        }
        case DELETE_ALL_BOOKS_CART: {
            return {
                ...state,
                booksInBasket: [],
            };
        }
        case ADD_FAVORITE: {
            const { isbn13 } = action;
            return ({
                ...state,
                favorites: [...state.favorites, isbn13],
            })
        }
        case REMOVE_FAVORITE: {
            const { isbn13 } = action;
            return ({
                ...state,
                favorites: state.favorites.filter((el) => el !== isbn13),
            })
        }
        default: return state;
    }
}

export { booksReducer };