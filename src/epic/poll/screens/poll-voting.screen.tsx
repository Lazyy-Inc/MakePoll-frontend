import { useState } from "react";
import iconPaperPlaneWhite from '../../../assets/white/iconPaperPlane.svg';
import { ActionButtonView } from "../../../components/buttons/action-button.view";
import { PollOptionModel } from "../models/poll-option.model";
import type { PollModel } from "../models/poll.model";
import { OptionPickerView } from "../views/option.picker";

interface Props {
  poll: PollModel
}

export const PollVottingScreen = ({ poll }: Props) => {

  const [stateOptions, setStateOptions] = useState<PollOptionModel[]>(poll.options);

  const handleOptionSelect = (index: number, isSelected: boolean) => {
    if (poll.possibleAnswers === 1) {
      const updatedOptions = stateOptions.map((option, idx) => ({
        ...option,
        isSelected: idx === index ? isSelected : false
      }));
      setStateOptions(updatedOptions);
      return;
    } else {
      const updatedOptions = stateOptions.map((option, idx) =>
        idx === index ? { ...option, isSelected } : option
      );
      setStateOptions(updatedOptions);
    }
  };

  return (
    <div className='flex flex-col items-center gap-extraLarge p-large w-screen min-h-screen'>
      <p className="text-title-large text-background-dark-50 focus:outline-none">{poll.question}</p>
      <div className="flex flex-col gap-standard w-full max-w-2xl">
        {stateOptions.map((option, index) => (
          <OptionPickerView
            key={index}
            isSelected={option.isSelected}
            text={option.text}
            onSelect={(value) => handleOptionSelect(index, value)}
          />
        ))}
      </div>
      <ActionButtonView
        label='Envoyer le vote'
        rightIcon={iconPaperPlaneWhite}
        onClick={() => console.log('Vote submitted for options:', stateOptions.filter(option => option.isSelected).map(option => option.text))}
      />
    </div>
  )
}