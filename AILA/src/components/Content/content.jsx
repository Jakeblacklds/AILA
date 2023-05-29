import React, { useState } from "react";

const Content = () => {
  // Usar el estado para guardar el recuadro activo (1 o 2) se uso useState para definir el estado inicial
    const [activeBox, setActiveBox] = useState(1);

  // Cambiar el estado al presionar un botón
    const clickBoton = (boxNumber) => {
    setActiveBox(boxNumber);
    };

    return (
    <div className="content">
        <h1>Content</h1>
      {/* Renderizar solo el recuadro que coincide con el estado */}
        {activeBox === 1 ? (
        <div className="content__box1">Este es el recuadro 1</div>
        ) : null}
        {activeBox === 2 ? (
        <div className="content__box2">Este es el recuadro 2</div>
        ) : null}
        <div className="content__buttons">

        {/* Llamar a la función que cambia el estado al presionar un botón */}
        <button className="content__button1" onClick={() => clickBoton(1)}> Botón 1</button>
        
        <button className="content__button2" onClick={() => clickBoton(2)}> Botón 2 </button>
        </div>
    </div>
  );
};

export default Content;
