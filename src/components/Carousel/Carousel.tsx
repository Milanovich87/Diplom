import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'
import { Book } from "../Card/Card.data";
import { useSelector } from "react-redux";
import { IStore } from "../../redux/types";
import { ThemeContext } from "../Posts/contexts";
import { useContext } from "react";

export const SwipeToSlide = () => {
    const data = useSelector((state: IStore) => state.books.books);

    const settings = {
        className: "center",
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        swipeToSlide: true,
        variableWidth: true,
        variableHeight: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ],
    };
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className={`slider--${theme}`}>
                <Slider   {...settings}>
                    {data.map((card, i) => <Book key={card.isbn13} authors={card.authors} price={card.price} isbn13={card.isbn13} title={card.title} image={card.image} />)}
                </Slider>
            </div>
        </>
    );
}
