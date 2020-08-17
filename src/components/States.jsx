import React, { useState } from 'react'

/**
 * Con stados hacemos interactivo el componente
 */

const States = () => {
    // se declara la variable que se va a escuchar
    const [ text, setText ] = useState("Texto inicial")
    // esta funcion dispara el evento que realiza un cambio en el estado de la variable text
    const changeText = () => {
        setText("Cambiando texto .... ");

        setTimeout( () => {
            setText("Nuevo texto");
        },
        5000);
    } 

    return (
        <>
            <h3>{ text }</h3>
            <button className="btn btn-success" onClick={ () => { changeText() } }>
                Change State
            </button>
        </>
    )
}

export default States
