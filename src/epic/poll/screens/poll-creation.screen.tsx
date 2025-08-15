import { useState } from "react"
import plusIconBlack from '../../../assets/iconPlus.svg'
import plusIconWhite from '../../../assets/white/iconPlus.svg'
import { ActionButtonView } from "../../../components/buttons/action-button.view"
import { SmallActionButtonView } from "../../../components/buttons/small-action-button.view"
import { TextFieldView } from "../../../components/textfields/textfield.view"
import { BannerManager } from "../../../core/banner.manager"
import { PollService } from "../networks/poll.service"
import { QuestionPollFieldView } from "../views/questionpollfield.view"

export const PollCreationScreen = () => {

  const [question, setQuestion] = useState('')
  const [textFieldValue, setTextFieldValue] = useState(['', ''])

  const handleTextFieldChange = (index: number, value: string) => {
    const newValues = [...textFieldValue]
    newValues[index] = value
    setTextFieldValue(newValues)
  }

  const copyToClipboard = async (text: string) => {
    try {
      // Essayer d'abord l'API moderne
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
        return true
      }
      
      // Fallback pour iOS et autres navigateurs
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      const result = document.execCommand('copy')
      document.body.removeChild(textArea)
      return result
    } catch (error) {
      console.error('Erreur lors de la copie:', error)
      return false
    }
  }

  return (
    <div className='flex flex-col items-center gap-extraLarge p-large w-full flex-1 bg-background-light-100'>
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
        onClick={ async () => {
          const response = await PollService.createPoll({
            question,
            options: textFieldValue,
            possibleAnswers: 1,
            isCaptchaEnabled: false,
            endDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            areResultsHidden: false
          })
          const pollUrl = `https://poll.lazyy.fr/votes-poll/${response.poll.id}`
          const success = await copyToClipboard(pollUrl)
          
          if (success) {
            BannerManager.shared.pushBanner({ text: 'Lien du sondage copié dans le presse-papiers', type: 'success' })
            // Optionnel : afficher une notification de succès
            console.log('Lien copié avec succès')
          } else {
            // Optionnel : afficher le lien à l'utilisateur pour copie manuelle
            console.log('Impossible de copier automatiquement:', pollUrl)
          }
        }}
      />
    </div>
  )
}