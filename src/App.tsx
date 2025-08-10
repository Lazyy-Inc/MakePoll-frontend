import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='font-bold'>Hello World</h1>
    </div>
  )
}

export default App
