import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Book } from '../Card/Card.data';
import { IBook, IStore } from '../../redux/types'
import './Favorites.scss';
import { ThemeContext } from '../Posts/contexts';

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
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className='favorites'>
                <div className="favorites__body">
                    <div className={`favorites__title--${theme}`}>
                        <h2>MY FAVORITES BOOKS</h2>
                    </div>
                    <div className='favorites__content'>
                        {data.length === 0 ? <h2>No favorites books</h2> : data.map((card, i) => <Book key={card.isbn13} {...card} />)}
                    </div>
                </div>
            </div>
        </>
    )
}
