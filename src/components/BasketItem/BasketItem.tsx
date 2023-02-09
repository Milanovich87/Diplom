import { Image } from '../Image/Image'
import './BasketItem.scss'
import { IBook, } from '../../redux/types';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { minusBookBasket, plusBookBasket, removeBook, } from '../../redux/actionCreators/booksActionCreators';
import { IconClose } from '../MyIcons/IconClose';
import { IconPlus } from '../MyIcons/IconPlus';
import { IconMinus } from '../MyIcons/IconMinus';
import { useContext } from 'react';
import { ThemeContext } from '../Posts/contexts';
interface ICard extends IBook {
    price: number;
    title: string;
    image: string;
    isbn13: string;
    count: number;
}

export const BasketItem = ({ price, title, image, isbn13, count }: ICard) => {
    const dispatch = useDispatch();

    const handleDeleteInCart = () => {
        dispatch(removeBook(isbn13));
    };

    const handlePlusBookBasket = () => {
        dispatch(plusBookBasket(isbn13));
    };

    const handleMinusBookBasket = () => {
        dispatch(count <= 0 ? removeBook(isbn13) : minusBookBasket(isbn13));
    };
    // @ts-ignore
    const totalPriceBook = price.split('$').pop() * count
    const { theme } = useContext(ThemeContext)

    return (
        <div className='item' key={isbn13}>
            <div className='item__body'>
                <div className='card__image'>
                    <Image className={`image__basket--${theme}`} image={image} alt={title} />
                </div>
                <div className='item__info'>
                    <h3 >
                        <Link className={`item__title--${theme}`} to={`/fullBook/${isbn13}`}>
                            {title}
                        </Link>
                    </h3>
                    <h4 className={`price--${theme}`}>{price}</h4>
                    <div className={`item__price--${theme}`}>
                        <h4>Total:</h4>${totalPriceBook.toFixed(2)}

                    </div>
                    <div className='item__buttons'>
                        <div className='item__count'>
                            <Button className={`btn__count--${theme}`} onClick={handlePlusBookBasket} ><IconPlus /></Button>
                            <p className={`count--${theme}`}>{count}</p>
                            {count === 0 ?
                                <Button className={`btn__count--${theme}`} onClick={handleMinusBookBasket} disabled><IconMinus /></Button> :
                                <Button className={`btn__count--${theme}`} onClick={handleMinusBookBasket}><IconMinus /></Button>
                            }
                        </div>
                        <div className='item__delete'>
                            <Button className={`btn__count--${theme}`} onClick={handleDeleteInCart}><IconClose /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


