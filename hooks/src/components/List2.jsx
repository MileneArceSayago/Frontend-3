import { useState} from "react";

const List2 = () => {
    const[listArticulos, setListArticulos] = useState([])
    const[articulo, setArticulo] = useState("");

    const addArticulo = () => {
       setListArticulos([...listArticulos, articulo])
    }

    const ingresoArticuloInput = (Event) => {
        setArticulo(Event.target.value)
    }

    return (
        <>
            <ul>
                {listArticulos.map((articulo, i) => (
                <li key={articulo}>{i+1} El articulo {articulo} ha sido añadido a la lista</li>
            ))}
            </ul>

            <input onChange={ingresoArticuloInput} type="text" placeholder="Ingrese artículo"/>
            <button onClick={addArticulo}>Agregar artículo</button>
        </>
    )
}


export default List2;