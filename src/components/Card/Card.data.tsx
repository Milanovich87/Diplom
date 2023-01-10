
import { Image } from '../Image/Image'

import './Card.scss'

import { IBook } from '../../redux/types';



interface ICard extends IBook {
    variant: string
}

export const Card = ({ variant, title, subtitle, image, isbn13 }: ICard) => {

    return (
        <div className={`card--${variant}`}>
            <div className='card__main'>
                <div className='card__info'>
                    <a href='#' className='card__title'>
                        <h3>{title}</h3>
                    </a>
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

