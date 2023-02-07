
import { useState } from 'react'
import { Button } from '../Button/Button'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { setSearchValue } from '../../redux/actionCreators/booksActionCreators'
import { IconBasket } from '../MyIcons/IconBasket'
import { Link } from 'react-router-dom'
import { IconClose } from '../MyIcons/IconClose'
import { IconSearch } from '../MyIcons/IconSearch'
import { IconUser } from '../MyIcons/IconUser'
import { IconHeart } from '../MyIcons/IconHeart'
import { Burger } from '../Burger/Burger'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'

export const Header = () => {
    const user = useSelector((state: IStore) => state.users.user)

    const [show, setShow] = useState('')
    const onClick = () => setShow('show')
    const search = show === ' ' ? ' ' : show
    const onClickClose = () => setShow(' ')
    const searchValue = useSelector((state: IStore) => state.books.searchValue);
    const dispatch = useDispatch();

    const handleInputChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
    }



    return (
        <div className="header">
            <header className='header__body'>
                <div className='header__logo'>
                    <Link className='header__home' to={'/'}><h2>BOOKSTORE</h2></Link>
                </div>

                <form className={`${search}search__form`}>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='search__input'
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                    <Button className='button__close' onClick={onClickClose}><IconClose /></Button>
                </form>
                <div className='header__navbar'>
                    <div className="header__button">
                        <Button className='header__button' onClick={onClick}><IconSearch /></Button>
                    </div>

                    {/* <ThemeToggler /> */}

                    {!user && <div className="header__button">
                        <Link className='header__button' to={'/sign_in'}><IconUser /></Link>
                    </div>}
                    <div className="header__burger">
                        <Burger setMenu={Function} />
                    </div>

                </div>

            </header>
        </div>

    )
}




