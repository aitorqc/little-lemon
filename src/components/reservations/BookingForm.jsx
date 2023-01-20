import React, { useEffect, useState } from 'react'

import "./BookingForm.css";

export default function BookingForm() {
    const [reservation, setReservation] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        partySize: "",
        specialRequests: ""
    });

    const [validation, setValidation] = useState({
        field: "",
        errorMsg: ""
    });

    const handleSubmit = async event => {
        event.preventDefault();
        const { name, email, phone, date, time, partySize } = reservation;

        // name validation
        if (!name) {
            setValidation({
                field: "name",
                errorMsg: "Name is required"
            })
            return;
        } else if (name.length < 2) {
            setValidation({
                field: "name",
                errorMsg: "Name must be at least 2 characters long"
            })
            return;
        } else {
            setValidation({
                field: "",
                errorMsg: ""
            })
        }

        // email validation
        if (!email) {
            setValidation({
                field: "email",
                errorMsg: "Email is required"
            })
            return;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setValidation({
                field: "email",
                errorMsg: "Invalid email address"
            })
            return;
        } else {
            setValidation({
                field: "",
                errorMsg: ""
            })
        }

        // phone validation
        if (!phone) {
            setValidation({
                field: "phone",
                errorMsg: "Phone is required"
            })
            return;
        } else if (!/^\d{9}$/.test(phone)) {
            setValidation({
                field: "phone",
                errorMsg: "Phone must be 9 digits"
            })
            return;
        } else {
            setValidation({
                field: "",
                errorMsg: ""
            })
        }

        // date validation
        if (!date) {
            setValidation({
                field: "date",
                errorMsg: "Date is required"
            })
            return;
        } else {
            setValidation({
                field: "",
                errorMsg: ""
            })
        }

        // time validation
        if (!time) {
            setValidation({
                field: "time",
                errorMsg: "Time is required"
            })
            return;
        } else {
            setValidation({
                field: "",
                errorMsg: ""
            })
        }

        // party size validation
        if (!partySize) {
            setValidation({
                field: "partySize",
                errorMsg: "Party size is required"
            })
            return;
        } else if (!/^\d+$/.test(partySize)) {
            setValidation({
                field: "partySize",
                errorMsg: "Party size must be a number"
            })
            return;
        } else {
            setValidation({
                field: "",
                errorMsg: ""
            })
        }

    };

    const handleChange = (field) => (event) => {
        setReservation({
            ...reservation,
            [field]: event.target.value
        });
    };

    return (
        <section className='form-booking'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    Name
                </label>
                <input type="text"
                    id='name'
                    value={reservation.name}
                    onChange={handleChange("name")}
                    minLength="2"
                    maxLength="20"
                    required
                    className={`${validation.field === "name" ? "error" : ""}`} />
                <div style={{ display: `${validation.field === "name" ? "block" : "none"}` }}>{validation.errorMsg}</div>
                <label htmlFor='email'>
                    Email
                </label>
                <input type="email"
                    id='email'
                    value={reservation.email}
                    onChange={handleChange("email")}
                    required
                    className={`${validation.field === "email" ? "error" : ""}`} />
                <div style={{ display: `${validation.field === "email" ? "block" : "none"}` }}>{validation.errorMsg}</div>
                <label htmlFor='phone'>
                    Phone
                </label>
                <input type="tel"
                    id='phone'
                    value={reservation.phone}
                    onChange={handleChange("phone")}
                    required
                    className={`${validation.field === "phone" ? "error" : ""}`} />
                <div style={{ display: `${validation.field === "phone" ? "block" : "none"}` }}>{validation.errorMsg}</div>
                <label htmlFor='date'>
                    Date
                </label>
                <input type="date"
                    id='date'
                    value={reservation.date}
                    onChange={handleChange("date")}
                    required
                    className={`${validation.field === "date" ? "error" : ""}`} />
                <div style={{ display: `${validation.field === "date" ? "block" : "none"}` }}>{validation.errorMsg}</div>
                <label htmlFor='time'>
                    Time
                </label>
                <input type="time"
                    id='time'
                    value={reservation.time}
                    onChange={handleChange("time")}
                    required
                    className={`${validation.field === "time" ? "error" : ""}`} />
                <div style={{ display: `${validation.field === "time" ? "block" : "none"}` }}>{validation.errorMsg}</div>
                <label htmlFor='number'>
                    Number of guests
                </label>
                <input type="number"
                    id='number'
                    value={reservation.partySize}
                    onChange={handleChange("partySize")}
                    min={1}
                    max={10}
                    required
                    className={`${validation.field === "number" ? "error" : ""}`} />
                <div style={{ display: `${validation.field === "number" ? "block" : "none"}` }}>{validation.errorMsg}</div>
                <label htmlFor='special'>
                    Special Requests
                </label>
                <textarea
                    id='special'
                    value={reservation.specialRequests}
                    onChange={handleChange("specialRequests")}>
                </textarea>
                <input type="submit" value="Make Reservation" />
            </form>
        </section>
    )
}
