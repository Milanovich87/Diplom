import React, { useContext, useEffect, useState } from 'react'
import './Pagination.scss'
import { Button } from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../../redux/types'
import { setCurrentPage } from '../../redux/actionCreators/settingsActionCreators'
import { IconLeftArrow } from '../MyIcons/IconLeftArrow'
import { IconRightArrow } from '../MyIcons/IconRightArrow'
import { ThemeContext } from '../Posts/contexts'
interface PaginationType {
    dataCount: number
}

export const Pagination = ({ dataCount }: PaginationType) => {
    const [isPrevDisabled, setIsPrevDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const currentPage = useSelector((state: IStore) => state.settings.currentPage);
    const booksPerPage = useSelector((state: IStore) => state.settings.booksPerPage);

    const dispatch = useDispatch()

    useEffect(() => {
        setIsPrevDisabled(currentPage === 1);
        const total = Math.ceil(dataCount / booksPerPage);
        setIsNextDisabled(total === currentPage);
    }, [currentPage, booksPerPage, dataCount])
    const { theme } = useContext(ThemeContext)

    return (
        <div className='pagination'>
            <div className='wrapper'>
                <div className={`pagination__body--${theme}`}>
                    <div className='pagination__left'>
                        <Button
                            className='left__btn'
                            style={{ opacity: isPrevDisabled ? '0.5' : '' }}
                            disabled={isPrevDisabled}
                            onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
                            <IconLeftArrow />
                            {'Prev'}
                        </Button>
                    </div>
                    <div className={`page__number--${theme}`}>{currentPage}</div>
                    <div className='pagination__right'>
                        <Button
                            className='right__btn'
                            style={{ opacity: isNextDisabled ? '0.5' : '' }}
                            disabled={isNextDisabled}
                            onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                            {'Next'}
                            <IconRightArrow />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
