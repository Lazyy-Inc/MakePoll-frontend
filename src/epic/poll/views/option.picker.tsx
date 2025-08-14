import { CheckboxView } from "../../../components/checkbox.view"

interface Props {
  isSelected: boolean
  text: string
  onSelect: (value: boolean) => void
}

export const OptionPickerView = ({ isSelected, text, onSelect }: Props) => {
  return (
    <div 
      className={`flex flex-row gap-standard p-standard rounded-standard border-1 ${isSelected ? 'bg-brand-blue-100 border-brand-blue-300' : 'bg-background-light-200 border-background-light-300'}`}
      onClick={() => onSelect(!isSelected)}
    >
      <CheckboxView
        isSelected={isSelected}
        onChange={onSelect}
      />
      <p className="text-body-medium text-background-dark-50">{ text }</p>      
    </div>
  )
}