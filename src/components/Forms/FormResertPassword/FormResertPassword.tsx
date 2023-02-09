import { useState } from 'react'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import './FormResertPassword.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../Posts/contexts';

export const FormResertPassword = () => {
    const [error, setError] = useState(false)
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (event.target < 0) {
            setError(true)
        } else {
            setError(false)
        }
    }

    const { theme } = useContext(ThemeContext)

    const [inputEmail, setInputEmail] = useState('')

    const [show, setShow] = useState('')
    const handleMail = () => {
        if (inputEmail.length <= 0) {
            setShow('')
        } else {
            setShow('show')
        }

    }
    const resert = show === ' ' ? ' ' : show

    return (
        <form className={`form-resert-password--${theme}`} onSubmit={onSubmit}>
            <p className={`${resert}submit__text`}>You will receive an email <span>{inputEmail}</span> with a link to reset your password!</p>
            <Input
                className='form__input'
                label='Email'
                placeholder='Your email'
                type='email'
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                error={error}
                errorText='Ошибка'
            />
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Resert password' onClick={handleMail} />
            </div>
        </form>
    )
}