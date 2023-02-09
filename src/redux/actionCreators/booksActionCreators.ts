import { put, takeEvery } from "redux-saga/effects";
import { ADD_BOOK, ADD_FAVORITE, DELETE_ALL_BOOKS_CART, LOAD_BOOK, LOAD_BOOKS, MINUS_BOOK_BASKET, PLUS_BOOK_BASKET, REMOVE_BOOK, REMOVE_FAVORITE, SET_BOOK, SET_BOOKS, SET_COUNT_TOTAL, SET_SEARCH_VALUE } from "../actionTypes/booksActionTypes";
import { IBook } from "../types";

function* fetchLoadBooks(action: any) {
    const response: Response = yield fetch(`https://api.itbook.store/1.0/new`);
    const data: { total: number, books: IBook[] } = yield response.json();
    const { total, books } = data;
    yield put(setBooksTotal(total));
    yield put(setBooks(books));
    console.log(total);
    console.log(books);
}

function* fetchSearchBooks(action: any) {
    const { payload } = action
    const { currentPage, searchValue } = payload

    const response: Response = yield fetch(`https://api.itbook.store/1.0/search/${searchValue}/${currentPage}`)
    const data: { total: number, books: IBook[] } = yield response.json()
    const { books, total } = data

    yield put(setBooksTotal(total))
    yield put(setBooks(books))

}

function* fetchSelectBook(action: any) {
    const { bookId } = action;
    try {
        const response: Response = yield fetch(`https://api.itbook.store/1.0/books/${bookId}`);
        if (!response.ok) {
            throw new Error("Error searching");
        }
        const data: IBook[] = yield response.json();
        yield put(setBook(data));
    } catch (error: any) {
        console.log(error);
    }

}

const dataLoad = (payload: { searchValue: string, booksPerPage: number, currentPage: number }) => ({
    type: LOAD_BOOKS,
    payload,
})

const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

const setBooksTotal = (total: number) => ({
    type: SET_COUNT_TOTAL,
    total,
});

const setBooks = (books: IBook[]) => ({
    type: SET_BOOKS,
    books,
});

const bookLoad = (bookId: string) => ({
    type: LOAD_BOOK,
    bookId,
});

const setBook = (book: IBook[]) => ({
    type: SET_BOOK,
    book,
});


const addBook = (book: IBook) => ({
    type: ADD_BOOK,
    book
});

const removeBook = (isbn13: string) => ({
    type: REMOVE_BOOK,
    isbn13
});

const plusBookBasket = (id: string) => ({
    type: PLUS_BOOK_BASKET,
    id,
});
const minusBookBasket = (id: string) => ({
    type: MINUS_BOOK_BASKET,
    id,
});

const deleteAllBooksCart = () => ({
    type: DELETE_ALL_BOOKS_CART,
});


const addFavorite = (isbn13: string) => ({
    type: ADD_FAVORITE,
    isbn13,
});

const removeFavorite = (isbn13: string) => ({
    type: REMOVE_FAVORITE,
    isbn13,
});


function* watcherBooks() {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)
    yield takeEvery(LOAD_BOOK, fetchSelectBook)
    yield takeEvery(LOAD_BOOKS, fetchSearchBooks)
}

export {
    setBooks,
    watcherBooks,
    dataLoad,
    setSearchValue,
    setBooksTotal,
    setBook,
    bookLoad,
    addBook,
    removeBook,
    deleteAllBooksCart,
    addFavorite,
    removeFavorite,
    plusBookBasket,
    minusBookBasket
};