import { useState } from 'react'
import { CheckboxView } from './components/checkbox.view'
import './styles/App.css'

function App() {

  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className='flex flex-col gap-large'>
      <p className='text-title-large p-standard rounded-small'>Make Poll</p>
      <CheckboxView
        initialValue={isSelected}
        onChange={setIsSelected} 
      />
    </div>
  )
}

export default App
