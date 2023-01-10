import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../Card/Card.data';
import { IStore } from '../../redux/types'
import { dataLoad } from '../../redux/actionCreators/booksActionCreators';
import './Blog.scss';
import { Pagination } from '../Pagination/Pagination';


export const Blog = () => {
    const data = useSelector((state: IStore) => state.books.books);
    console.log(data);
    const dataCount = useSelector((state: IStore) => state.books.countTotal);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage);
    const searchValue = useSelector((state: IStore) => state.books.searchValue);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataLoad({ rowsPerPage, currentPage, searchValue }));
    }, [currentPage, rowsPerPage, searchValue])


    return (
        <>
            <div className={`blog__body`}>
                <div className='blog__main-content'>
                    {data.map((card, i) => <Card key={card.isbn13} variant='middle' isbn13={card.isbn13} title={card.title} image={card.image} />)}
                </div>
            </div>
            <Pagination dataCount={dataCount} />
        </>
    )
}


