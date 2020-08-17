import React, { useState } from 'react'

const Count = () => {

    const [ count, setCount ] = useState(0)

    return (
        <div>
            { count } <br />
            <button className="btn btn-primary mr-3" onClick={ ()=> { setCount( count + 1 ) } }>
                Aumentar
            </button>
            <button className="btn btn-warning" onClick={ () => { setCount( count - 1 ) } }>
                Disminuir
            </button>
        </div>
    )
}

export default Count
