import React from 'react'
import './card.scss'

export const Card = (props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    )
}
