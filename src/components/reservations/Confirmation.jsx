import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineCheckCircle } from "react-icons/ai";

import "./Confirmation.css";

export default function Confirmation({ scrollPosition, confirm }) {
    const { y } = scrollPosition;
    const style = {
        display: `${confirm ? "block" : "none"}`,
        top: `${y + window.innerHeight / 2}px`,
    };

    return (
        <div class="confirmation" style={style}>
            <div>
                <h1>Confirmed Resevation</h1>
                <AiOutlineCheckCircle />
            </div>
            <h2>Thank you for your order</h2>
            <Link to="/" className='button'>Return</Link>
        </div>
    )
}
