import { put, takeEvery } from "redux-saga/effects";
import { LOAD_BOOKS, SET_BOOKS, SET_COUNT_TOTAL, SET_SEARCH_VALUE } from "../actionTypes/booksActionTypes";
import { IBook } from "../types";

function* fetchLoadBooks(action: any) {
    const { payload } = action;
    const { rowsPerPage, currentPage, searchValue } = payload;
    const response: Response = yield fetch(`https://api.itbook.store/1.0/new`);
    const data: { total: number, books: IBook[] } = yield response.json();
    const { books, total } = data;
    yield put(setBooksTotal(total));
    yield put(setBooks(books));
    console.log(data);
    console.log(books);
}

const dataLoad = (payload: { currentPage: number, rowsPerPage: number, searchValue: string }) => ({
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

function* watcherBooks() {
    yield takeEvery(LOAD_BOOKS, fetchLoadBooks)

}

export {
    setBooks,
    watcherBooks,
    dataLoad,
    setSearchValue,
    setBooksTotal,
};