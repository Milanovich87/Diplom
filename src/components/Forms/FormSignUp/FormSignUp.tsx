import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import './FormSignUp.scss'

import { useContext } from 'react'
import { ThemeContext } from '../../Posts/contexts';
import { signup } from '../../../redux/actionCreators/userActionCreators'

export const FormSignUp = () => {
    const [error, setError] = useState(false)
    const dispatch = useDispatch();
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (event.target < 0) {
            setError(true)
        } else {
            setError(false)
            dispatch(signup({
                username: event.target[1].value,
                email: event.target[3].value,
                password: event.target[5].value,
            }))
        }
    }

    const { theme } = useContext(ThemeContext)

    // const [inputName, setInputName] = useState('')
    // const [inputConfirmPassword, setInputConfirmPassword] = useState('')
    // const [inputEmail, setInputEmail] = useState('')
    // const [inputPassword, setInputPassword] = useState('')



    return (
        <form className={`form-sign-up--${theme}`} onSubmit={onSubmit}>
            <Input
                className='form__input'
                label='Name'
                placeholder='Your name'
                type='text'
            // value={inputName}
            // onChange={(e) => setInputName(e.target.value)}
            // error={error}
            // errorText='Ошибка'

            />
            <Input
                className='form__input'
                label='Email'
                placeholder='Your email'
                type='email'
            // value={inputEmail}
            // onChange={(e) => setInputEmail(e.target.value)}
            // error={error}
            // errorText='Ошибка'

            />
            <Input
                className='form__input'
                label='Password'
                type='password'
                placeholder='Your password'
            // value={inputPassword}
            // onChange={(e) => setInputPassword(e.target.value)}
            // error={error}
            // errorText='Ошибка'

            />
            <Input
                className='form__input'
                label='Confirm password'
                type='password'
                placeholder='Confirm password'
            // value={inputConfirmPassword}
            // onChange={(e) => setInputConfirmPassword(e.target.value)}
            // error={error}
            // errorText='Ошибка'

            />
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Sign Up' />
                <p className='submit__text'>
                    Already have an account?
                    <NavLink style={{ textDecoration: 'none' }} to='/sign_in'>
                        <span>Sign In</span>
                    </NavLink></p>
            </div>
        </form>
    )
}

