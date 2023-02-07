import { IBook } from "../../redux/types";

export const totalPrice = (books: IBook[]): string => {
    let totalBooksInCart = 0;
    let totalPriceCart = 0;
    books.forEach((book) => {
        // @ts-ignore
        totalBooksInCart += book.count;
        // @ts-ignore
        totalPriceCart += Number(book.price.split('$').pop()) * book.count;

    });
    return totalPriceCart.toFixed(2)

};