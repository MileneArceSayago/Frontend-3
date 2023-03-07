
import reactLogo from './assets/react.svg'
import './App.css'
import List from './components/List'
import Formulario from './components/Formulario'


function App() {
  return (
    <div className="App">
      <div className='div'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Formulario/>
      <List/>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more for Milene 
      </p>
    </div>
  )
}

export default App
