import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/tijilparakh04" target="_blank">
          <img src= "/github.png" className="logo" />
        </a>
        <a href="https://www.linkedin.com/in/tijil-parakh-bb7b2a253/" target="_blank">
          <img src= "/linkedin.png" className="logo" />
        </a>
      </div>
      <h1>Tijil Parakh</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
