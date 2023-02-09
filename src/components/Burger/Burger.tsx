import React, { useEffect, useRef, useState } from "react";
import '../Burger/Burger.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "../../redux/types";
import { logOut } from "../../redux/actionCreators/userActionCreators";
import { IconHeart } from "../MyIcons/IconHeart";
import { IconBasket } from "../MyIcons/IconBasket";
import { totalBooks } from "../TotalCountersBasket/TotalBooksBasket";



export const Burger = ({ setMenu }: { setMenu: Function }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: IStore) => state.users.user)
    const booksInBasket = useSelector((state: IStore) => state.books.booksInBasket);

    function useOutsideAlerter(ref: any, setMenu: Function) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setMenuClass("menu hidden")
                    setBurgerClass("burger-bar unclicked")
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }
    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden1")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const handleLogOut = () => {
        dispatch(logOut());
        localStorage.removeItem('jwtAccess');
        localStorage.removeItem('jwtRefresh');
        setMenu(false);
        navigate('/sign_in');
    }
    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const { theme } = useContext(ThemeContext)
    const menuRef = useRef(null);

    useOutsideAlerter(menuRef, setMenu);


    return (
        <div className={menu_class} ref={menuRef}>
            {user &&
                <div className={`burger--${theme}`}>
                    <div className="header__button">
                        <Link className='header__button' to={'/basket'} ><span >{!totalBooks(booksInBasket) ? '' : totalBooks(booksInBasket)}</span><IconBasket /></Link>
                    </div>
                    <div className="header__button">
                        <Link className='header__button' to={'/favorites'}><IconHeart /></Link>
                    </div>
                    <nav className="header__button">
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burger_class} ></div>
                            <div className={burger_class} ></div>
                            <div className={burger_class} ></div>
                        </div>
                    </nav>
                    <div className={menu_class} ref={menuRef}>
                        {user &&
                            <div className='menu__username'>
                                <span className='initials2'>{`${user.username?.charAt(0).toUpperCase()}${user.username?.charAt(user.username.length - 1).toUpperCase()}`}</span>
                                <div className="user__name">{user?.username}</div>
                            </div>
                        }
                        <div className='home__link'>
                            <NavLink to='/' style={{ textDecoration: 'none' }}>Home</NavLink>
                        </div>
                        <div className='add-post__link'>
                            <NavLink to='/favorites' style={{ textDecoration: 'none' }}>MY FAVORITES</NavLink>
                        </div>
                        <div className='my-posts__link'>
                            <NavLink to='/basket' style={{ textDecoration: 'none' }}>MY CART</NavLink>
                        </div>
                        <ThemeToggler />
                        <div>
                            <button className='log-out__link' onClick={handleLogOut}>Log Out</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}



