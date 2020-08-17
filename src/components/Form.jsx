import React, { useState } from 'react'

export const Form = () => {
    
    const [fruit, setFruit] = useState("")

    const [description, setDescription] = useState("")

    const submitForm = (e) => {
        e.preventDefault();
        if (fruit.trim() == '') {
            console.log("fruit empty");
            return false;
        }
        if (description.trim() == '') {
            console.log("description empty");
            return false;
        }
        console.log("Form ok ")
        e.target.reset()
        setfruits([
            ...fruits,
            {
                name: fruit,
                description: description
            }
        ])
        setFruit('')
        setDescription('')
    }

    const [fruits, setfruits] = useState([])

    return (
        <div>
            <form onSubmit={ submitForm }>
                { fruit }
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Ingrese fruta"
                    onChange={ (e) => setFruit(e.target.value) }
                />
                { description }
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="ingrese descripción"
                    onChange={ (e) => setDescription(e.target.value) }
                />
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
                <span>
                    Frutas agregadas:
                </span>
                <table className="table table-hover table-striped">
                    <thead>
                        <th>Fruta</th>
                        <th>Descripción</th>
                    </thead>
                    <tbody>
                        {
                            fruits.map( ( item , index ) => (
                                    <tr key={ index }>
                                        <td>{ item.name }</td>
                                        <td>{ item.description }</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Form