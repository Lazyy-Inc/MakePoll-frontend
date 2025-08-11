import { useState } from "react"
import { CheckboxView } from "../../../components/checkbox.view"

interface Props {
  text: string
  initialValue: boolean
  onChange: (isSelected: boolean) => void
}

export const SettingsCheckboxView = ({ text, initialValue, onChange }: Props) => {

  const [isSelected, setIsSelected] = useState(initialValue)

  const handleToggle = () => {
    const newValue = !isSelected
    setIsSelected(newValue)
    onChange?.(newValue)
  }

  return (
    <div className="flex flex-row w-full">
      <p className="text-body-medium text-background-dark-400 w-full text-left">{ text }</p>
      <CheckboxView 
        initialValue={isSelected}
        onChange={handleToggle}
      />
    </div>
  )
}