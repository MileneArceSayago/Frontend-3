import { useState} from "react";

const List = () => {
    const[items, setItems] = useState([])

    const[contador, setContador] = useState(0);

    const addItem = (x) => {
       setContador (contador+1)
        setItems([...items, contador])
    }

    return (
        <>
            <ul>
            {items.map((item) => (
                <li key={item}>el punto {item} ha sido añadido a la lista</li>
            ))}
            </ul>
            <button onClick={()=>addItem(contador)}>Agregar item</button>
        </>
    )
}


export default List;