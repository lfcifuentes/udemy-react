import React from 'react'

const Events = () => {
    const eventClick = () => { 
        console.log("Click")
    }
    return (
        <>  
            <h3>Events</h3>
            <button onClick={ eventClick }>
                Click
            </button> 
        </>
    )
}

export default Events
