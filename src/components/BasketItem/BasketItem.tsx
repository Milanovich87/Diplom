import { Image } from '../Image/Image'
// import './Card.scss'
import { IBook, IStore } from '../../redux/types';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, addPrice, deleteAllBooksCart, minusBookBasket, plusBookBasket, removeBook, removePrice } from '../../redux/actionCreators/booksActionCreators';
import { useState } from 'react';

interface ICard extends IBook {
    price: number;
    title: string;
    image: string;
    isbn13: string;
    count: number;

}
export const BasketItem = ({ price, title, image, isbn13, count }: ICard) => {
    // const dispatch = useDispatch();
    // const [count, setCount] = useState(1)

    // const totalBooksBasket = useSelector((state: IStore) => state.books.totalBooksBasket)


    // const handlePlusBook = () => {
    //     dispatch(addBook(isbn13));
    //     dispatch(addPrice(price));
    //     setCount(count + 1)
    //     dispatch(setCartBooksTotal(totalBooksBasket + 1))

    // }

    // const handleMinusBook = () => {
    //     // dispatch(removeBook(isbn13))
    //     setCount(count - 1)
    //     dispatch(removePrice(price));
    //     dispatch(setCartBooksTotal(totalBooksBasket - 1));
    // }

    const dispatch = useDispatch();
    const handleDeleteInCart = () => {
        dispatch(removeBook(isbn13));

    };

    const handleMinusBookBasket = () => {
        dispatch(minusBookBasket(isbn13));
    };
    const handlePlusBookBasket = () => {
        // dispatch(plusBookBasket(isbn13));
        dispatch(count <= 0 ? removeBook(isbn13) : plusBookBasket(isbn13));
    };

    return (
        <div className={`card`} key={isbn13}>
            <div className='card__main'>
                <div className='card__info'>
                    <h3 >
                        <Link className='card__title' to={`/fullBook/${isbn13}`}>
                            {title}
                        </Link>
                    </h3>
                    <div className='card__price'>
                        {price}
                    </div>
                    <div className='card__price'>
                        <Button className='btn-add' onClick={handleMinusBookBasket} >+</Button>
                        {count}
                        {count === 0 ?
                            <Button className='btn-add' onClick={handlePlusBookBasket} disabled>-</Button> :
                            <Button className='btn-add' onClick={handlePlusBookBasket}>-</Button>
                        }
                    </div>
                    <div className='card__delete'>
                        <p onClick={handleDeleteInCart}>X</p>
                    </div>
                </div>
                <div className='card__image'>
                    <Image className={`photo`} image={image} alt={title} />
                </div>
            </div>

        </div>
    )
}


