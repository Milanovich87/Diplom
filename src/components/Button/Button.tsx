import React, { ButtonHTMLAttributes, ReactElement } from 'react' // { useState }
import './Buttons.scss'

import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts'

type ButtonProps = {
    type?: string
    link?: string
    text?: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    className: string
    icon?: ReactElement
    alt?: string
    count?: any
    children?: any
}

export const dataButtons: ButtonProps[] = [
    {
        text: 'Primary',
        className: 'btn-primary',
    },
    {
        text: 'Secondary',
        className: 'btn-secondary',
    },
    {
        text: 'Secondary 2',
        className: 'btn-secondary2',
    },
]


export const Button = ({
    text,
    type = 'button',
    link,
    children,
    disabled = false,
    onClick,
    className,
    icon,
    count,
    ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { theme } = useContext(ThemeContext)

    return (
        <button
            className={`btn--${theme} ${className}`} // для dataButtons
            // className={className}
            disabled={disabled}
            onClick={onClick}
            type={type}

            {...rest}
        >
            {icon}
            {link}
            {count}
            {children}
            {text && <span className="btn__text">{text}</span>}
        </button >
    )
}