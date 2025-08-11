
interface Props {
  text: string
  initialValue: boolean
  onChange: (isSelected: boolean) => void
}

export const SettingsDropdownView = ({ text, initialValue, onChange }: Props) => {
  return (
    <div className="flex flex-row w-full">
      <p className="text-body-medium text-background-dark-400 w-full text-left">{text}</p>

    </div>
  )
}