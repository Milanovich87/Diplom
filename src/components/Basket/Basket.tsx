import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { setBooksCart } from '../../redux/actionCreators/booksActionCreators';

import { IBook, IStore } from '../../redux/types';
import { Book } from '../Card/Card.data';
import './Basket.scss'

export const Basket = () => {
    const bookscart = useSelector((state: IStore) => state.books.bookscart);
    const books = useSelector((state: IStore) => state.books.books);

    const booksInBasket = useSelector((state: IStore) => state.books.booksInBasket)
    const dispatch = useDispatch();

    useEffect(() => {
        const resultData = [] as IBook[];
        books.forEach((book) => {
            if (booksInBasket.includes(book.isbn13)) {
                resultData.push(book);
            }
        });
        dispatch(setBooksCart(resultData));
        console.log(resultData)

    }, [booksInBasket])

    console.log(bookscart)
    console.log(booksInBasket)


    const totalPrice = bookscart.reduce((sum: any, obj: any) => {
        const price = Array.from(obj.price)
        price.shift()
        const bookPrice = Number(price.join(''))


        return bookPrice + sum
    }, 0)
    console.log(totalPrice)

    return (
        <>
            <div className={`basket__body`}>
                <span>{totalPrice}$</span>
                <div className='blog__main-content'>
                    {bookscart.map((card, i) => <Book key={card.isbn13} variant='bg' price={card.price} isbn13={card.isbn13} title={card.title} image={card.image} />)}
                </div>

            </div>
        </>
    )
}