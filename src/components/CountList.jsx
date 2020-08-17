import React, { useState } from 'react'

const CountList = () => {
    const [ numbers , setNumbers ] = useState([1, 2, 3, 4, 5, 6]);
    
    const [ time, setTime] = useState(1)

    const addItem = () => {
        setNumbers([
            ...numbers,
            time + 6
        ])
        setTime( time + 1 )
    }

    return (
        <div>
            <button className="btn btn-info mt-3" onClick={ addItem }>
                Añadir item
            </button>
            <ul>
                {
                    numbers.map( ( item, index ) => 
                        <li key={ index }>
                            { item } -  { index }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default CountList
