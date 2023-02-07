import { IBook } from "../../redux/types";

export const totalBooks = (books: IBook[]): number => {
    let totalBooksInCart = 0;
    books.forEach((book) => {
        // @ts-ignore
        totalBooksInCart += book.count;
    });
    return totalBooksInCart
};