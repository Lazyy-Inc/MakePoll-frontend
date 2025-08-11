import { useState } from 'react'
import { QuestionPollFieldView } from './components/textfields/questionpollfield.view'
import { TextFieldView } from './components/textfields/textfield.view'
import { SettingsScreen } from './epic/settings/screens/settings.screen'
import './styles/App.css'

function App() {

  const [question, setQuestion] = useState('')
  const [textFieldValue, setTextFieldValue] = useState(['', ''])

  const handleTextFieldChange = (index: number, value: string) => {
    const newValues = [...textFieldValue]
    newValues[index] = value
    setTextFieldValue(newValues)
  }

  return (
    <div className='flex flex-row w-screen min-h-screen'>
      <div className='flex flex-col items-center gap-extraLarge p-large w-full'>
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
      </div>

      <SettingsScreen />

    </div>
  )
}

export default App
