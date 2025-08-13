import { useState } from "react"
import plusIconBlack from '../../../assets/iconPlus.svg'
import plusIconWhite from '../../../assets/white/iconPlus.svg'
import { ActionButtonView } from "../../../components/buttons/action-button.view"
import { SmallActionButtonView } from "../../../components/buttons/small-action-button.view"
import { TextFieldView } from "../../../components/textfields/textfield.view"
import { QuestionPollFieldView } from "../views/questionpollfield.view"

export const PollCreationScreen = () => {

  const [question, setQuestion] = useState('')
  const [textFieldValue, setTextFieldValue] = useState(['', ''])

  const handleTextFieldChange = (index: number, value: string) => {
    const newValues = [...textFieldValue]
    newValues[index] = value
    setTextFieldValue(newValues)
  }

  return (
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
        <div className='flex w-full justify-end'>
          <SmallActionButtonView
            label='Ajouter une option'
            rightIcon={plusIconBlack}
            onClick={() => setTextFieldValue([...textFieldValue, ''])}
          />
        </div>
      </div>

      <ActionButtonView
        label='Créer le sondage'
        rightIcon={plusIconWhite}
        onClick={() => console.log('Poll created with question:', question, 'and options:', textFieldValue)}
      />
    </div>
  )
}