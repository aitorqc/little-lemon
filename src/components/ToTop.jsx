import React, { useEffect } from 'react'
import { BiUpArrow } from "react-icons/bi"

export default function ToTop() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='toTop' onClick={handleClick}>
            <BiUpArrow />
        </div>
    )
}
