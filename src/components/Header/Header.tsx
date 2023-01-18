
import { useState } from 'react'
// import { Burger } from '../Burger/Burger'
import { Button } from '../Button/Button'
// import { IconClose } from '../MyIcons/IconClose'
// import { IconSearch } from '../MyIcons/IconSearch'
// import { IconUser } from '../MyIcons/IconUser'
import './Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { setSearchValue } from '../../redux/actionCreators/booksActionCreators'
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



    return (
        <div className="header">
            <header className='header__body'>
                <div className='header__burger'>
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
                    <Button className='header__button' >сердце</Button>
                    <div className="user">
                        юзер
                    </div>
                </div>

            </header>
        </div>

    )
}


