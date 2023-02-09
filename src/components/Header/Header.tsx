
import { useContext, useState } from 'react'
import { Button } from '../Button/Button'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { setSearchValue } from '../../redux/actionCreators/booksActionCreators'
import { Link } from 'react-router-dom'
import { IconClose } from '../MyIcons/IconClose'
import { IconSearch } from '../MyIcons/IconSearch'
import { IconUser } from '../MyIcons/IconUser'
import { Burger } from '../Burger/Burger'
import { ThemeContext } from '../Posts/contexts';
import { setCurrentPage } from '../../redux/actionCreators/settingsActionCreators'

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
        dispatch(setCurrentPage(1))
    }

    const { theme } = useContext(ThemeContext)

    return (
        <div className={`header--${theme}`}>
            <header className='header__body'>
                <div className='header__logo'>
                    <Link className={`header__home--${theme}`} to={'/'}><h2>BOOKSTORE</h2></Link>
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
                <div className={`header__navbar--${theme}`}>
                    <div className="header__button">
                        <Button className='header__button' onClick={onClick}><IconSearch /></Button>
                    </div>
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




