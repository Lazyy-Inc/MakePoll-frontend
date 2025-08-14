import iconCheck from '../assets/white/iconCheck.svg'

interface Props {
  isSelected: boolean
  onChange: (value: boolean) => void
}

export const CheckboxView = ({ isSelected, onChange }: Props) => {
  const handleToggle = () => {
    onChange(!isSelected)
  }

  return (
    <div 
      className={`${isSelected ? `bg-blue-500 border-blue-700` : `bg-background-light-100 border-background-light-300`} w-[28px] h-[28px] rounded-small border-1 cursor-pointer justify-center items-center flex`}
      onClick={handleToggle}
    >
      <img 
        src={iconCheck} 
        alt='check' 
        className={`${isSelected ? 'block' : 'hidden'} w-4 h-4`} 
      />
    </div>
  )
}