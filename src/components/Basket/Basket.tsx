import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllBooksCart } from '../../redux/actionCreators/booksActionCreators';
import { IStore } from '../../redux/types';
import { BasketItem } from '../BasketItem/BasketItem';
import { Button } from '../Button/Button';
import { SubscribeForm } from '../Forms/SubscribeForm/SubscribeForm';
import { ThemeContext } from '../Posts/contexts';
import { totalBooks } from '../TotalCountersBasket/TotalBooksBasket';
import { totalPrice } from '../TotalCountersBasket/TotalPraiceBasket';
import './Basket.scss'

export const Basket = () => {
    const dispatch = useDispatch();

    const booksInBasket = useSelector((state: IStore) => state.books.booksInBasket);

    const handleDeleteAllBooksCart = () => {
        dispatch(deleteAllBooksCart());
    };
    const { theme } = useContext(ThemeContext)

    return (

        <div className='basket'>
            <div className={`basket__body--${theme}`}>
                <div className="basket__info">
                    <div className="basket__total">
                        <h2 className='total__items'>Total price: ${totalPrice(booksInBasket)}</h2>
                        <h2 className='total__items'>Total books: {totalBooks(booksInBasket)}pcs</h2>
                    </div>

                    <Button className='delete__books' onClick={handleDeleteAllBooksCart}>Clear cart</Button>
                </div>
                <div className='basket__items'>
                    {booksInBasket.length === 0 ? <h2>Empty cart</h2> :
                        // @ts-ignore
                        booksInBasket.map((item) =>
                            <BasketItem key={item.isbn13} {...item} />)}
                </div>
                <SubscribeForm />
            </div>


        </div>

    )
}