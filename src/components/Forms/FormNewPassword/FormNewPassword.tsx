import { useState } from 'react'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import './FormNewPassword.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../Posts/contexts';
import { THEMES } from '../../Posts/constants';

export const FormNewPassword = () => {
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
    const themeStyle = {
        [THEMES.light]: {

        },
        [THEMES.dark]: {
            backgroundColor: '#313037',
            color: '#FFFFFF'
        }
    }

    const [inputPassword, setInputPassword] = useState('')
    const [inputConfirmPassword, setInputConfirmPassword] = useState('')

    return (
        <form className='form-new-password' onSubmit={onSubmit} style={{ ...themeStyle[theme] }}>
            <Input
                className='form__input'
                label='Password'
                type='password'
                placeholder='Your password'
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                error={error}
                errorText='Ошибка'
            />
            <Input
                className='form__input'
                label='Confirm password'
                type='password'
                placeholder='Confirm password'
                value={inputConfirmPassword}
                onChange={(e) => setInputConfirmPassword(e.target.value)}
                error={error}
                errorText='Ошибка'
            />
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Sign In' />
            </div>
        </form>
    )
}