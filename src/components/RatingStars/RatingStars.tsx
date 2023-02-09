import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './RatingStars.scss';
export function RatingStars() {

    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
    }

    return (
        <div>
            <Rating
                onClick={handleRating}
            />
        </div>
    )
}