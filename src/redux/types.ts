
export interface IBook {
    isbn13: number,
    image?: string,
    title?: string,
    subtitle?: string,
    price?: number,
}

export interface IBooksStore {
    books: IBook[],
    countTotal: number,
    searchValue: string,

}

export interface IStore {
    books: IBooksStore,
    settings: ISettingsStore,

}

export interface ISettingsStore {
    currentPage: number,
    rowsPerPage: number,
}

