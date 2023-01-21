import React, {useState, useEffect} from 'react'

import BookingForm from '../components/reservations/BookingForm'
import Confirmation from '../components/reservations/Confirmation'
import HeroBookingSection from '../components/reservations/HeroBookingSection'

export default function Booking() {
    const [confirm, setConfirm] = useState(false);
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition({ y: window.scrollY });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className='container'>
            <HeroBookingSection
                image={"restauranfood.jpg"}
                title={"Little Lemon"}
                subtitle={"Chicago"} />
            <BookingForm setConfirm={setConfirm}/>
            <Confirmation scrollPosition={scrollPosition} confirm={confirm}/>
        </main>
    )
}
