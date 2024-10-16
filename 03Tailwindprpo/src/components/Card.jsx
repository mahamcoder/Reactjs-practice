import React from 'react'

function Card({ username, btnText }) {
    return (
        <div className='bg-blue-300 mb-5 mt-5 text-xl text-black font-bold'>
            <h2>props using compnonets</h2>
            <p>my self {username}</p>
            <button className='bg-blue-600 px-5 py-2 rounded-full mt-3 mb-3'>{btnText}</button>
        </div>
    )
}

export default Card
