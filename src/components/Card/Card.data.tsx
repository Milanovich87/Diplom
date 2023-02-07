import { Image } from '../Image/Image'
import './Card.scss'
import { IBook, IStore } from '../../redux/types';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, addFavorite, addPrice, removeFavorite } from '../../redux/actionCreators/booksActionCreators';
import { IconHeart } from '../MyIcons/IconHeart';
import { RatingStars } from '../RatingStars/RatingStars';


export const Book = ({ title, subtitle, image, isbn13, price, }: IBook) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: IStore) => state.books.favorites)
    const isInclude = favorites.includes(isbn13);
    const handleToggleFavorite = () => {
        dispatch(isInclude ? removeFavorite(isbn13) : addFavorite(isbn13))
    }

    const handleAddToCart = () => {
        const cartItem = {
            isbn13,
            title,
            price,
            image,
            count: 1,
        };
        dispatch(addBook(cartItem));
    };
    const user = useSelector((state: IStore) => state.users.user)


    return (
        <div className='book' key={isbn13}>
            <div className='book__main'>
                <div className='book__info'>
                    <Link className='book__title' to={`/fullBook/${isbn13}`}>
                        {title}
                    </Link>
                    <div className='book__subtitle'>
                        {subtitle}
                    </div>
                    <div className='book__price'>
                        {price}
                    </div>
                    <div className='book__btn'>
                        {!user ? <Button className='btn-add' onClick={handleAddToCart} disabled>ADD TO CART</Button> :
                            <Button className='btn-add' onClick={handleAddToCart} >ADD TO CART</Button>
                        }
                        <RatingStars />
                    </div>
                </div>
                <div className='card__image'>
                    {!user ?
                        <Button className='btn-favorite' onClick={handleToggleFavorite} disabled><IconHeart color={isInclude ? 'red' : 'white'} /></Button> :
                        <Button className='btn-favorite' onClick={handleToggleFavorite}><IconHeart color={isInclude ? 'red' : 'white'} /></Button>
                    }
                    <Image className='book__image' image={image} alt={title} />
                </div>
            </div>

        </div>
    )
}


