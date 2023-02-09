import React, { useContext, useState } from 'react'
import { Button } from '../../Button/Button'
import { ThemeContext } from '../../Posts/contexts'
import './SubscribeForm.scss'
import axios from 'axios';
import { Alert } from 'react-bootstrap';

export const SubscribeForm = () => {
    const { theme } = useContext(ThemeContext)
    const TOKEN = '6254134850:AAG49t1YwL7zC5rp7Wg84HpHZq9GMGFcyDY';
    const CHAT_ID = '-1001840621233';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    document.getElementById('tg')?.addEventListener('submit', function (e) {
        e.preventDefault();
        let message = `<b>Заявка с сайта!</b>\n`;
        // @ts-ignore
        message += `<b>Почта:</b>${this.email.value}\n`;
        console.log(message);
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
            .then((res) => {
                // @ts-ignore
                this.email.value = '';
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => {
                console.log('Конец');
            })
    })
    const [show, setShow] = useState(false);
    return (
        <section className='subscribe'>
            <div className={`subscribe__body--${theme}`}>
                <h2 className='subscribe__title'>Subscribe to newsletter</h2>
                <p className='subscribe__text'>Be the firth to know about new IT books, upcoming releases, exclusive offers and more.</p>
                <form className='subscribe__form' id='tg' >
                    <input type='text' name='email' placeholder='Your e-mail' />
                    <Alert variant="success" show={show} onClose={() => setShow(false)} dismissible>
                        Сообщение отправлено!
                    </Alert>
                    <Button className='button' type='submit' onClick={() => setShow(true)}>Subscribe</Button>
                </form>
            </div>
        </section>
    )
}