import React, { useEffect, useState } from "react";
import Cartwidget from "../Cartwidjet/cartWidget";
import "../Cartwidjet/cartWidget.css";

const Content = () => {
  // Usar el estado para guardar el recuadro activo (1 o 2) se uso useState para definir el estado inicial
    const [activeBox, setActiveBox] = useState(1);

  // Cambiar el estado al presionar un botón
    const clickBoton = (boxNumber) => {
    setActiveBox(boxNumber);
    };

    

    return (
    <div className="content">
        <h1>Tienda Principal</h1>
      {/* Renderizar solo el recuadro que coincide con el estado */}
      <div className="content__buttons">
      <button className="content__button1" onClick={() => clickBoton(1)}> Productos</button>
        
      <button className="content__button2" onClick={() => clickBoton(2)}> Carrito <Cartwidget /> </button>
      </div>
        {activeBox === 1 ? (
        <div className="content__box1">Aqui va la Tienda</div>
        ) : null}
        {activeBox === 2 ? (
        <div className="content__box2">Aqui va el carrito</div>
        ) : null}
        

        {/* Llamar a la función que cambia el estado al presionar un botón */}
 
       
    </div>
  );
};

export default Content
