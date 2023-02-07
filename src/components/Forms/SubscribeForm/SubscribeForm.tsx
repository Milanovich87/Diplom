import React from 'react'
import { Button } from '../../Button/Button'
import './SubscribeForm.scss'

export default function SubscribeForm() {
    return (
        <section className='subscribe'>
            <div className='subscribe__body'>
                <h2 className='subscribe__title'>Subscribe to newsletter</h2>
                <p className='subscribe__text'>Be the firth to know about new IT books, upcoming releases, exclusive offers and more.</p>
                <form className='subscribe__form' method='post'>
                    <input type='text' placeholder='Your e-mail' />
                    <Button className='button' type='submit'>Subscribe</Button>
                </form>
            </div>
        </section>
    )
}