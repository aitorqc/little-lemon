import React from "react";

export default function BurgerIcon({isMenuOpen, setIsMenuOpen}) {

    return (
        <div className="burger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`burger-icon__line ${isMenuOpen ? "open" : ""}`}/>
            <div className={`burger-icon__line ${isMenuOpen ? "open" : ""}`} />
            <div className={`burger-icon__line ${isMenuOpen ? "open" : ""}`}/>
        </div>
    );
}