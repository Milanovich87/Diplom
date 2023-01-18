
export interface IBook {
    isbn13?: number,
    image?: string,
    title?: string,
    subtitle?: string,
    price?: number,
}

export interface IBooksStore {
    oneBook: IBook | null,
    books: IBook[],
    countTotal: number,
    searchValue: string,

}
export interface ISettingsStore {
    currentPage: number,
    booksPerPage: number,
}
export interface IStore {
    books: IBooksStore,
    settings: ISettingsStore,

}



