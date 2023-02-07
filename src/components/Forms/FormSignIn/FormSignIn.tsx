import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import './FormSignIn.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../Posts/contexts';
import { useDispatch } from 'react-redux'
import { signin } from '../../../redux/actionCreators/userActionCreators'
import React from 'react'

export const FormSignIn = () => {

    const { theme } = useContext(ThemeContext)
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState('')
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const [error, setError] = useState(false)
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (email.length < 0) {
            setError(!error)
        }
        if (password.length < 0) {
            setError(!error)
        }
        dispatch(signin({
            email: event.target[1].value,
            password: event.target[3].value,
        }, navigate))
    }

    return (
        <form className={`form-sign-in--${theme}`} onSubmit={onSubmit}>
            <Input
                label='Email'
                placeholder='Your email'
                type='email'

                error={error}
                onChange={handleEmail}
                value={email}
            />
            <Input
                label='Password'
                type='password'
                placeholder='Your password'

                error={error}
                onChange={handlePassword}
                value={password}
            />
            <NavLink style={{ textDecoration: 'none' }} to='/reset_password'>
                <p className='form__text'>Forgot password?</p>
            </NavLink>
            <div className='form__submit'>
                <Button className='form__btn' onSubmit={onSubmit} type='submit' children='Sign In' />
                <p className='submit__text'>
                    Don`t have an account?
                    <NavLink style={{ textDecoration: 'none' }} to='/sign_up'>
                        <span>Sign Up</span>
                    </NavLink>
                </p>
            </div>
        </form>
    )
}

