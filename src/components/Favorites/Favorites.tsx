import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Book } from '../Card/Card.data';
import { IBook, IStore } from '../../redux/types'
import './Favorites.scss';

export const FavoritesBooks = () => {


    const [data, setData] = useState([] as IBook[]);
    const books = useSelector((state: IStore) => state.books.books);

    const favorites = useSelector((state: IStore) => state.books.favorites)

    useEffect(() => {
        const resultData = [] as IBook[];
        books.forEach((book) => {
            if (favorites.includes(book.isbn13)) {
                resultData.push(book);
            }
        });
        setData(resultData);
    }, [favorites])
    console.log(data)

    return (
        <>
            <div className='favorites'>
                <div className="favorites__body">
                    <div className="favorites__title">
                        <h2>MY FAVORITES BOOKS</h2>
                    </div>
                    <div className='favorites__content'>
                        {data.map((card, i) => <Book key={card.isbn13} authors={card.authors} price={card.price} isbn13={card.isbn13} title={card.title} image={card.image} />)}
                    </div>
                </div>

            </div>
        </>
    )
}
