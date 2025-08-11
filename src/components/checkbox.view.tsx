import { useState } from 'react'

interface Props {
  initialValue?: boolean
  onChange?: (value: boolean) => void
}

export const CheckboxView = ({ initialValue = false, onChange }: Props) => {
  const [isSelected, setIsSelected] = useState(initialValue)
  
  const handleToggle = () => {
    const newValue = !isSelected
    setIsSelected(newValue)
    onChange?.(newValue)
  }

  return (
    <div 
      className={`${isSelected ? `bg-blue-500 border-blue-700` : `bg-background-light-200 border-background-light-300`} w-[28px] h-[28px] rounded-small border-1 cursor-pointer`}
      onClick={handleToggle}
    >
    </div>
  )
}