
import { useEffect, useState } from 'react'
// import { Burger } from '../Burger/Burger'
import { Button } from '../Button/Button'
// import { IconClose } from '../MyIcons/IconClose'
// import { IconSearch } from '../MyIcons/IconSearch'
// import { IconUser } from '../MyIcons/IconUser'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { setSearchValue } from '../../redux/actionCreators/booksActionCreators'
import { IconBasket } from '../MyIcons/SvgDisLike'
import { Link } from 'react-router-dom'
import store from '../../redux/store'
// import { IconHeart } from '../MyIcons/IconHeart'

export const Header = () => {

    const [show, setShow] = useState('')
    const onClick = () => setShow('show')
    const search = show === ' ' ? ' ' : show
    const onClickClose = () => setShow(' ')
    const searchValue = useSelector((state: IStore) => state.books.searchValue);
    console.log(searchValue)
    const dispatch = useDispatch();

    const handleInputChange = (e: any) => {
        dispatch(setSearchValue(e.target.value))
    }
    const totalBooksBasket = useSelector((state: IStore) => state.books.totalBooksBasket)




    return (
        <div className="header">
            <header className='header__body'>
                <div className='header__logo'>
                    <h2>BOOKSTORE</h2>
                </div>
                <form className={`${search}search__form`}>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='search__input'
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                    <Button className='button__close' onClick={onClickClose}>закрыть</Button>
                </form>
                <div className='header__navbar'>
                    <Button className='header__button' onClick={onClick}>поиск</Button>
                    <Link className='header__button' to={'/basket'} ><span>{totalBooksBasket}</span><IconBasket /></Link>
                    <div className="user">
                        юзер
                    </div>
                </div>

            </header>
        </div>

    )
}




