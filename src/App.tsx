import { useState } from 'react'
import { CheckboxView } from './components/checkbox.view'
import { QuestionPollFieldView } from './components/textfields/questionpollfield.view'
import { TextFieldView } from './components/textfields/textfield.view'
import './styles/App.css'

function App() {

  const [question, setQuestion] = useState('')
  const [textFieldValue, setTextFieldValue] = useState(['', ''])
  const [isSelected, setIsSelected] = useState(false)

  const handleTextFieldChange = (index: number, value: string) => {
    const newValues = [...textFieldValue]
    newValues[index] = value
    setTextFieldValue(newValues)
  }

  return (
    <div className='flex flex-col items-center gap-extraLarge w-screen min-h-screen p-large'>
      <QuestionPollFieldView 
        initialValue={question}
        onChange={(value) => setQuestion(value)}
      />

      <div className='flex flex-col gap-standard w-full'>
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
