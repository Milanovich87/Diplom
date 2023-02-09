import React, { useContext } from 'react';
import { ThemeContext } from '../Posts/contexts';
import { IconDark } from '../MyIcons/IconDark';
import './themeToggler.scss'
import { IconLight } from '../MyIcons/IconLight';
import { Button } from 'react-bootstrap';


export const ThemeToggler = () => {
    const { handleLightTheme } = useContext(ThemeContext)
    const { handleDarkTheme } = useContext(ThemeContext)
    const { theme } = useContext(ThemeContext)

    return (
        <div className={`light__dark--${theme}`} >
            <Button className='button__light' onClick={handleLightTheme} >{<IconLight />}</Button>
            <Button className='button__dark' onClick={handleDarkTheme}>{<IconDark />}</Button>
        </div>
    )
}

