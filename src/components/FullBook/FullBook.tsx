import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { bookLoad } from "../../redux/actionCreators/booksActionCreators"
import { IBook, IStore } from "../../redux/types"
import { Book } from "../Card/Card.data"
import { Image } from '../Image/Image'

interface ICard extends IBook {
    variant: string
}

export const FullBook = ({ variant, title, subtitle, image, isbn13 }: ICard) => {
    const { oneBook } = useSelector((state: IStore) => state.books);
    const dispatch = useDispatch();
    const { bookId } = useParams()

    useEffect(() => {
        dispatch(bookLoad(bookId!));
    }, []);
    console.log(bookId)
    console.log(oneBook)

    return (
        <div>
            {oneBook && < Book variant={"middle"} {...oneBook} />
            }
        </div>

        // <div className={`card--${variant}`} >
        //     <div className='card__main'>
        //         <div className='card__info'>
        //             <a href='#' className='card__title'>
        //                 <h3 >{title}</h3>
        //             </a>
        //             <div className='card__description'>
        //                 {subtitle}
        //             </div>
        //         </div>
        //         <div className='card__image'>
        //             <Image className={`photo--${variant}`} image={image} alt={title} />
        //         </div>
        //     </div>
        // </div >




    )
}




