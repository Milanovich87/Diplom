
export interface IBook {
    isbn13?: any,
    image?: string,
    title?: string,
    subtitle?: string,
    price?: number


}

export interface IBooksStore {
    oneBook: IBook | null,
    books: IBook[],
    bookscart: IBook[],
    countTotal: number,
    searchValue: string,
    booksInBasket: number[],
    totalBooksBasket: number,

}
export interface ISettingsStore {
    currentPage: number,
    booksPerPage: number,
}
export interface IStore {
    books: IBooksStore,
    settings: ISettingsStore,

}



