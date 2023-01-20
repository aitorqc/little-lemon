import React from 'react'

import BookingForm from '../components/reservations/BookingForm'
import HeroBookingSection from '../components/reservations/HeroBookingSection'

export default function Booking() {
    return (
        <main className='container'>
            <HeroBookingSection
                image={"restauranfood.jpg"}
                title={"Little Lemon"}
                subtitle={"Chicago"} />
            <BookingForm />
        </main>
    )
}
