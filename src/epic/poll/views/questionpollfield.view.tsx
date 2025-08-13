import { useState } from "react";

interface Props {
  initialValue: string;
  onChange: (value: string) => void;
}

export const QuestionPollFieldView = ({ initialValue, onChange }: Props) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="text-title-large text-background-dark-400 focus:outline-none"
      placeholder="Question du sondage ..."
    />
  )
}