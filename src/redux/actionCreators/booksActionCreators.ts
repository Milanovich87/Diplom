import { put, takeEvery } from "redux-saga/effects";
import { ADD_BOOK, LOAD_BOOK, LOAD_BOOKS, REMOVE_BOOK, SET_BOOK, SET_BOOKS, SET_BOOKS_CART, SET_COUNT_TOTAL, SET_SEARCH_VALUE, SET_TOTAL_BOOKS_CART } from "../actionTypes/booksActionTypes";
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


function* fetchSelectBook(action: any) {
    const { bookId } = action;
    try {
        const response: Response = yield fetch(`https://api.itbook.store/1.0/books/${bookId}`);
        if (!response.ok) {
            // alert("Ошибка!!!");
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


const addBook = (isbn13: number) => ({
    type: ADD_BOOK,
    isbn13
});

const removeBook = (isbn13: number) => ({
    type: REMOVE_BOOK,
    isbn13
});

const setCartBooksTotal = (isbn13: number) => ({
    type: SET_TOTAL_BOOKS_CART,
    isbn13
});
const setBooksCart = (bookscart: IBook[]) => ({
    type: SET_BOOKS_CART,
    bookscart
});

function* watcherBooks() {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)
    yield takeEvery(LOAD_BOOK, fetchSelectBook)

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
    setCartBooksTotal,
    setBooksCart,


};