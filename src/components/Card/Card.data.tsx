import { Image } from '../Image/Image'
import './Card.scss'
import { IBook } from '../../redux/types';
import { Link } from 'react-router-dom';

interface ICard extends IBook {
    variant: string

}

export const Book = ({ variant, title, subtitle, image, isbn13 }: ICard) => {

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
                </div>
                <div className='card__image'>
                    <Image className={`photo--${variant}`} image={image} alt={title} />
                </div>
            </div>

        </div>
    )
}


