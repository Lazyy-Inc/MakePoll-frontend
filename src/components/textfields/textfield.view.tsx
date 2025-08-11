import { useState } from 'react';

interface Props {
  initialValue: string;
  onChange: (value: string) => void;
}

export const TextFieldView = ({ initialValue, onChange }: Props) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <div className='flex flex-row bg-background-light-200 border-1 border-background-light-300 rounded-standard p-standard w-full'>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="text-body-medium focus:outline-none w-full"
        placeholder="Option"
      />

      { value ? (
        <p>✅</p>
      ) : (
        <p>❌</p>
      )} 

    </div>
  )
}