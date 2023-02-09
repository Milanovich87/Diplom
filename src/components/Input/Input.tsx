import './Input.scss'
import { useContext } from 'react'
import { ThemeContext } from '../Posts/contexts';

export interface InputProps {
    label?: string
    type?: string
    className?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    error?: boolean
    errorText?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
    label = 'Text',
    type = 'text',
    placeholder = '',
    disabled = false,
    required = true,
    error,
    errorText,
    className,
    onChange = () => { },
    value

}: InputProps) => {
    const { theme } = useContext(ThemeContext)

    return (
        <fieldset className={`form__input--${theme}`}>
            <label>{label}
                <input
                    className={className}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </label>
            {error && <span>{errorText}</span>}
        </fieldset>
    )
}