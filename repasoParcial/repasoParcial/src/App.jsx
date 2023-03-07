import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './components/Formulario'
import Cartel from './components/Cartel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Mi Turno</h1>
      <Formulario />
      <Cartel />
    </div>
  )
}

export default App;
