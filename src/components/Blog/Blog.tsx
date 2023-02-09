import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Book } from '../Card/Card.data';
import { IStore } from '../../redux/types'
import { dataLoad } from '../../redux/actionCreators/booksActionCreators';
import './Blog.scss';
import { Pagination } from '../Pagination/Pagination';
import SubscribeForm from '../Forms/SubscribeForm/SubscribeForm';
import { ThemeContext } from '../Posts/contexts';

export const NewBooks = () => {
    const data = useSelector((state: IStore) => state.books.books);

    const dispatch = useDispatch();

    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    const booksPerPage = useSelector((state: IStore) => state.settings.booksPerPage);
    const dataCount = useSelector((state: IStore) => state.books.countTotal)
    const searchValue = useSelector((state: IStore) => state.books.searchValue);

    useEffect(() => {
        dispatch(dataLoad({
            searchValue,
            booksPerPage, currentPage,
        }));
    }, [searchValue, booksPerPage, currentPage])

    const lastBookIndex = currentPage * booksPerPage
    const firstBookIndex = lastBookIndex - booksPerPage

    const filteredBooks = data.filter((book: any) => {
        return book.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    const currentBook = filteredBooks.slice(firstBookIndex, lastBookIndex)

    const { theme } = useContext(ThemeContext)


    return (
        <div className='books'>
            <div className={`books__body`}>
                <div className={`books__title--${theme}`}>
                    <h1>NEW RELEASES BOOKS</h1>
                </div>
                <div className='books__content'>
                    {currentBook.map((card, i) => <Book key={card.isbn13} authors={card.authors} price={card.price} isbn13={card.isbn13} title={card.title} image={card.image} />)}
                </div>
            </div>
            < Pagination dataCount={dataCount} />
            <SubscribeForm />
        </div>
    )
}
