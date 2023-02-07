import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { activation } from '../../redux/actionCreators/userActionCreators';

const Activation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        const splittedPath = window.location.pathname.split('/');
        dispatch(activation({
            uid: splittedPath[2],
            token: splittedPath[3],
        }, navigate))
    }, [])
    return (
        <div>
            Activation your account
        </div>
    )
}

export { Activation };