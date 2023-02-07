import { useDispatch, useSelector } from 'react-redux'
import { deleteAllBooksCart } from '../../redux/actionCreators/booksActionCreators';

import { IStore } from '../../redux/types';
import { BasketItem } from '../BasketItem/BasketItem';
import { Button } from '../Button/Button';
import { totalBooks } from '../TotalCountersBasket/TotalBooksBasket';
import { totalPrice } from '../TotalCountersBasket/TotalPraiceBasket';
import './Basket.scss'

export const Basket = () => {

    const dispatch = useDispatch();

    const booksInBasket = useSelector((state: IStore) => state.books.booksInBasket);

    const handleDeleteAllBooksCart = () => {
        dispatch(deleteAllBooksCart());
    };

    return (
        <>
            <div className={`basket__body`}>
                <span>Total price: ${totalPrice(booksInBasket)}</span>
                <span>Total books: {totalBooks(booksInBasket)}pcs</span>
                <Button className='delete__books' onClick={handleDeleteAllBooksCart}>Clear cart</Button>
                <div className='blog__main-content'>
                    {booksInBasket.map((item) =>
                        <BasketItem key={item.isbn13} {...item} />)}
                </div>

            </div>
        </>
    )
}