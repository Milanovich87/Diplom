import { Image } from '../Image/Image'
import './FavoriteBook.scss'
import { IBook, IStore } from '../../redux/types';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, addFavorite, removeFavorite } from '../../redux/actionCreators/booksActionCreators';
import { IconHeart } from '../MyIcons/IconHeart';
import { RatingStars } from '../RatingStars/RatingStars';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubscribeForm from '../Forms/SubscribeForm/SubscribeForm';
import { SwipeToSlide } from '../Carousel/Carousel';
import { ThemeContext } from '../Posts/contexts';
import { useContext } from 'react';

export const FullItem = ({ authors, title, image, isbn13, price, publisher, language, url, desc }: IBook) => {
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
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`bookfav--${theme}`} key={isbn13}>
            <div className='bookfav__main'>
                <div className="bookfav__title"><h2>{title}</h2></div>
                <div className="bookfav__content">
                    <div className='bookfav__image'>
                        <Button className='btn-favorite' onClick={handleToggleFavorite}><IconHeart color={isInclude ? 'red' : 'white'} /></Button>
                        <Image className='bookfav__image' image={image} alt={title} />
                    </div>
                    <div className='bookfav__info'>
                        <div className='bookfav__price'>
                            {price}
                            <RatingStars />
                        </div>
                        <div className="bookfav__desc">
                            <h3>Authors</h3>
                            {authors}
                        </div>
                        <div className="bookfav__desc">
                            <h3>Publisher</h3>
                            {publisher}
                        </div>
                        <div className="bookfav__desc">
                            <h3>Language</h3>
                            {language}
                        </div>
                        <div className="bookfav__desc">
                            <h3>Format</h3>
                            <p>Paper book / ebook (PDF)</p>
                        </div>
                        <div className="bookfav__more">
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            More details
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className='bookfav__btn'>
                                            <Button className='btn-add' onClick={handleAddToCart} >ADD TO CART</Button>
                                            <a className='bookfav__preview' href={`${url}`} >Preview book</a>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bookfav__tabs">
                <Tabs
                    defaultActiveKey="Description"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                >
                    <Tab eventKey="Description" title="Description">
                        {desc}
                    </Tab>
                    <Tab eventKey="Authors" title="Authors">
                        {authors}
                    </Tab>
                    <Tab eventKey="Reviews" title="Reviews">
                        <p>Чаво сюда засунуть?</p>
                    </Tab>

                </Tabs>
            </div>
            <div className="bookfav__subscribe">
                <SubscribeForm />
            </div>
            <div className="bookfav__slider">
                <h3>SIMILAR BOOKS</h3>
                <SwipeToSlide />
            </div>
        </div>
    )
}


