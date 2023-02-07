import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { bookLoad } from "../../redux/actionCreators/booksActionCreators"
import { IBook, IStore } from "../../redux/types"
import { FullItem } from "../FavoriteBook/FavoriteBook"



export const FullBook = ({ title, subtitle, image, }: IBook) => {
    const oneBook = useSelector((state: IStore) => state.books.oneBook);
    const dispatch = useDispatch();
    const { bookId } = useParams()

    useEffect(() => {
        dispatch(bookLoad(bookId!));
    }, [bookId]);


    return (
        <div>
            {oneBook && < FullItem  {...oneBook} />
            }
        </div>
    )
}




