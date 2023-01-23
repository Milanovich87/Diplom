import { Image } from '../Image/Image'
import './Card.scss'
import { IBook, IStore } from '../../redux/types';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook, setCartBooksTotal } from '../../redux/actionCreators/booksActionCreators';

interface ICard extends IBook {
    variant: string

}
export const Book = ({ variant, title, subtitle, image, isbn13, price }: ICard) => {
    const dispatch = useDispatch();
    const totalBooksBasket = useSelector((state: IStore) => state.books.totalBooksBasket)

    const handleToggleFavorite1 = () => {
        dispatch(addBook(isbn13))
        dispatch(setCartBooksTotal(totalBooksBasket + 1));
    }

    const handleToggleFavorite2 = () => {
        dispatch(removeBook(isbn13))
        dispatch(setCartBooksTotal(totalBooksBasket - 1));
    }


    return (
        <div className={`card--${variant}`} key={isbn13}>
            <div className='card__main'>
                <div className='card__info'>
                    <h3 >
                        <Link className='card__title' to={`fullBook/${isbn13}`}>
                            {title}
                        </Link>

                    </h3>
                    <div className='card__description'>
                        {subtitle}
                    </div>
                    <div className='card__price'>
                        {price}
                    </div>
                    <div className='card__price'>
                        <Button className='btn-add' onClick={handleToggleFavorite1}>ADD TO CART</Button>
                        <Button className='btn-add' onClick={handleToggleFavorite2}>DELETE</Button>

                    </div>
                </div>
                <div className='card__image'>
                    <Image className={`photo--${variant}`} image={image} alt={title} />
                </div>
            </div>

        </div>
    )
}


