// Header.js
import React, { useState } from "react";


const Header = () => {
  // Definir un estado para la clase del header
const [headerClass, setHeaderClass] = useState("header-red");

  // Definir una función que cambie el estado según el parámetro que reciba
const changeClass = (color) => {
    if (color === "red") {
    setHeaderClass("header-red")
    } else if (color === "green") {
    setHeaderClass("header-green")
    }
};

return (
    <header className={`header ${headerClass} transition`}>
    <div className="header__container">
        <img  className="header__img" src="./img/aila.png" alt="Logo" />
        <h1 className="header__logo">AILA STORE</h1>

        <nav className="header__nav">
        <a
            className="header__link link"
            href="#"
            onClick={() => changeClass("red")}
        >
            Home
        </a>
        <a
            className="header__link link"
            href="#"
            onClick={() => changeClass("green")}
        >
            Tienda
        </a>
        <a
            className="header__link link"
            href="#"
            onClick={() => changeClass("green")}
        >
            Contacto
        </a>



        
        </nav>
    </div>
    </header>
    );
};

export default Header;

