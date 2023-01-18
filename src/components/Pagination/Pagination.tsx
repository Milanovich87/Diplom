import React, { useEffect, useState } from 'react'
import './Pagination.scss'
import { Button } from '../Button/Button'
// import { IconLeftArrow } from '../MyIcons/IconLeftArrow'
// import { IconRightArrow } from '../MyIcons/IconRightArrow'
import { useContext } from 'react'
// import { ThemeContext } from '../Posts/contexts';
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { setCurrentPage } from '../../redux/actionCreators/settingsActionCreators'

interface PaginationType {

    dataCount: number
}

export const Pagination = ({ dataCount }: PaginationType) => {
    // const { theme } = useContext(ThemeContext);
    const [isPrevDisabled, setIsPrevDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    const booksPerPage = useSelector((state: IStore) => state.settings.booksPerPage);
    console.log(currentPage)
    console.log(booksPerPage)
    console.log(dataCount)

    const dispatch = useDispatch()

    useEffect(() => {
        setIsPrevDisabled(currentPage === 1);
        const total = Math.ceil(dataCount / booksPerPage);
        setIsNextDisabled(total === currentPage);
    }, [currentPage, booksPerPage, dataCount])
    return (
        <div className={`pagination--`}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button
                            className='left__btn'
                            style={{ opacity: isPrevDisabled ? '0.5' : '' }}
                            disabled={isPrevDisabled}
                            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                        >
                            {/* <IconLeftArrow /> */}
                            {'Prev'}
                        </Button>
                    </div>
                    <div className='page__numer'>{currentPage}</div>
                    <div className='pagination__right'>
                        <Button
                            className='right__btn'
                            style={{ opacity: isNextDisabled ? '0.5' : '' }}
                            disabled={isNextDisabled}
                            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                        >
                            {'Next'}
                            {/* <IconRightArrow /> */}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
