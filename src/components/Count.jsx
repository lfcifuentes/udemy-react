import React, { useState } from 'react'

const Count = () => {

    const [ count, setCount ] = useState(0)

    return (
        <div>
            { count } <br />
            <button onClick={ ()=> { setCount( count + 1 ) } }>
                Aumentar
            </button>
            <button onClick={ () => { setCount( count - 1 ) } }>
                Disminuir
            </button>
        </div>
    )
}

export default Count
