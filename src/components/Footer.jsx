import React from 'react'


export default function Footer() {
    let image = "LittleLemon.png";

    return (
        <footer className='footer'>
            <div className='container'>
                <img src={require("../icons_assets/"+image)} alt="" />
                <div>
                    <ul>
                        <li>Doormat Navigation</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                    <ul>
                        <li>Contact</li>
                        <li>Adress</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                    <ul>
                        <li>Social Media Links</li>
                        <li>Adress</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
