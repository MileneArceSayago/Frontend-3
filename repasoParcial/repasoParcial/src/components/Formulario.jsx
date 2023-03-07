import { useState } from "react";
import Cartel from './Cartel'


function Formulario () {
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [isErrorUser, setIsErrorUser] = useState(false);
    
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangeUserLastName = (e) => setUserLastName(e.target.value);


    const validateUserName = (userName) => {
        if (userName.length > 5){
            return true;
        }else{
            return false;
        }
    }

    const validateUserLastName = (userLastName) => {
        if (userLastName.length > 5){
            return true;
        }else{
            return false;
        }
    }

    function onSubmitForm(e){
        e.preventDefault();

        if(validateUserName(userName) && validateUserLastName(userLastName)){
            setIsErrorUser(false);
            <Cartel />
        }else{
            setIsErrorUser(true);
            console.log("Hay un error!")
        }
    }

    return(
        <>
            <form onSubmit={onSubmitForm}>
                <div>
                <input
                type="text"
                placeholder="Escriba su nombre"
                value={userName}
                onChange={onChangeUserName}
                />
                <div>
                <input
                type="userLastName"
                placeholder="Escriba su apellido"
                value={userLastName}
                onChange={onChangeUserLastName}
                />
                </div>
                {<div>
                <select name="doctor" placeholder="Escoge un médico" required>
                    <option value="value0" disabled hidden>Escoge un médico</option>
                    <option value="value1">Dr. Malavida</option>
                    <option value="value2">Dr. Buenavida</option>
                    <option value="value3">Dr. Mediavida</option>
                </select>
                </div>}
            <button type="submit">Guardar</button>
            </div>
        </form>
        </>
    );
        
};
            

export default Formulario;
