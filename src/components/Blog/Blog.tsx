import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Book } from '../Card/Card.data';
import { IStore } from '../../redux/types'
import { dataLoad } from '../../redux/actionCreators/booksActionCreators';
import './Blog.scss';

import { Pagination } from '../Pagination/Pagination';


export const Blog = () => {

    const data = useSelector((state: IStore) => state.books.books);

    const dispatch = useDispatch();
    // const [currentPage, setCurrentPage] = useState(useSelector((state: IStore) => state.settings.currentPage));
    // const [booksPerPage] = useState(useSelector((state: IStore) => state.settings.booksPerPage));
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

    // const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    // const nextPage = () => setCurrentPage(prev => prev + 1)
    // const prevPage = () => setCurrentPage(prev => prev - 1)

    // const [isPrevDisabled, setIsPrevDisabled] = useState(false);
    // const [isNextDisabled, setIsNextDisabled] = useState(false);

    // useEffect(() => {
    //     setIsPrevDisabled(currentPage === 1);
    //     const count = Math.ceil(data.length / booksPerPage);
    //     setIsNextDisabled(count === currentPage);
    // }, [currentPage, booksPerPage, data.length])

    return (
        <>
            <div className={`blog__body`}>
                <div className='blog__main-content'>
                    {currentBook.map((card, i) => <Book key={card.isbn13} variant='middle' isbn13={card.isbn13} title={card.title} image={card.image} />)}
                </div>
            </div>

            < Pagination dataCount={dataCount} />

        </>
    )
}
