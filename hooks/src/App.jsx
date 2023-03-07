import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './components/List'
import List2 from './components/List2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <List />
      <List2 />
    </div>
  )
}

export default App
