import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nombre, mensaje });
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Nombre:
        <input className='input' type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </label>
      <br/>
      <br/>
      <label>
        Mensaje:
        <textarea className='input' value={mensaje} onChange={(event) => setMensaje(event.target.value)} />
      </label>
      <br />
      <br/>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;