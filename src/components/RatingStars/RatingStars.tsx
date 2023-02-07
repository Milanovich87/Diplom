import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './RatingStars.scss';
export function RatingStars() {
    const [rating, setRating] = useState(0)

    // Ловим значение рейтинга
    const handleRating = (rate: number) => {
        setRating(rate)

    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div>
            <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
            /* Available Props */
            />
        </div>
    )
}