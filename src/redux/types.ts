
export interface IBook {
    // isbn13?: any | undefined,
    isbn13?: any,
    image?: string,
    title?: string,
    subtitle?: string,
    price?: number,
    authors?: string,
    rating?: string,
    publisher?: string,
    language?: string,
    url?: string,
    pages?: string,
    year?: string,
    desc?: string,
    count?: number | undefined,


}

export interface IBooksStore {
    priceTotal: any[];
    price: string[];
    book: any;
    oneBook: IBook | null,
    books: IBook[],
    bookscart: IBook[],
    countTotal: number,
    searchValue: string,
    booksInBasket: any[],
    totalBooksBasket: number,
    favorites: number[],
    items: IBook[],
    count: number;


}
export interface ISettingsStore {
    currentPage: number,
    booksPerPage: number,
    activeTab: string,
}
export interface IStore {
    books: IBooksStore,
    settings: ISettingsStore,
    users: IUserStore,


}

export interface IUserStore {
    user: IUser
}
export interface IUser {
    id?: number,
    email: string,
    username?: string,
    password: string
}

export interface JwtResponse {
    access: string,
    refresh: string
}


