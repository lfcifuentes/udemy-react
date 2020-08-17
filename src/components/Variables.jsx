import React from 'react'

const Variables = () => {
    const saludo = "Hola desde constante";

    const imagen = "https://media.aws.alkosto.com/media/catalog/product/cache/1/small_image/280x/9df78eab33525d08d6e5fb8d27136e95/7/7/7707467660336_01_matebookd_14_512gb_mystic_silver_morral_router_unl_com.jpg"

    return (
        <div>
            { saludo }
            <img src={imagen} alt="Test"/>
        </div>
    )
}

export default Variables
