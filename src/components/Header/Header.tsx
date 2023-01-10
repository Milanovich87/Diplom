
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
    // const UserName = 'Artem Malkin'
    // const UserNameInitials = UserName.split(' ').map(function (x) { return x[0].toUpperCase(); })
    const [show, setShow] = useState('')
    const onClick = () => setShow('show')
    const search = show === ' ' ? ' ' : show
    const onClickClose = () => setShow(' ')
    const searchValue = useSelector((state: IStore) => state.books.searchValue);
    const dispatch = useDispatch();


    const handleInputChange = (e: any) => {
        // debounce(() => {
        //     dispatch(setSearchValue(e.target.value))
        // }, 500)
        dispatch(setSearchValue(e.target.value))
    }

    return (
        <div className="header">
            <header className='header__body'>
                <div className='header__burger'>
                    {/* <Burger setMenu={Function} /> */}
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

                        {/* <div className='initials'>{UserNameInitials}</div>
                    <div className="username">{UserName}</div> */}
                    </div>
                </div>
            </header>
        </div>

    )
}


