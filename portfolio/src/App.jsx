import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        {
          <div>
            <a href="https://github.com/tijilparakh04" target="_blank">
              <img src= "/github.png" className="logo" />
            </a>
            <a href="https://www.linkedin.com/in/tijil-parakh-bb7b2a253/" target="_blank">
              <img src= "/linkedin.png" className="logo" />
            </a>
          </div>
        }
        <h1>Tijil Parakh</h1>
      </div>
    </>
  )
}

export default App
