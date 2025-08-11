import { useState } from 'react'
import { CheckboxView } from './components/checkbox.view'
import { TextFieldView } from './components/textfields/textfield.view'
import './styles/App.css'

function App() {

  
  const [textFieldValue, setTextFieldValue] = useState(['', ''])
  const [isSelected, setIsSelected] = useState(false)

  const handleTextFieldChange = (index: number, value: string) => {
    const newValues = [...textFieldValue]
    newValues[index] = value
    setTextFieldValue(newValues)
  }

  return (
    <div className='flex flex-col gap-extraLarge w-screen min-h-screen p-large'>
      <p className='text-title-large p-standard rounded-small'>Make Poll</p>
      <div className='flex flex-col gap-standard'>
        {textFieldValue.map((value, index) => (
        <TextFieldView
          key={index}
          initialValue={value}
          onChange={(newValue) => handleTextFieldChange(index, newValue)}
        />
      ))
      }
      </div>

            <CheckboxView initialValue={isSelected} onChange={setIsSelected} />

    </div>
  )
}

export default App
