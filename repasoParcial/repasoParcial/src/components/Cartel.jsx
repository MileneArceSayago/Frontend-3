import { useState } from "react";


function Cartel (props){
    return (
        <>
            <h2>{props.userName}</h2>
            <h2>{props.userLastName}</h2>
            {props.children}
        </>

    )
}


export default Cartel;