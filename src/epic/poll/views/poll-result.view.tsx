import { ProgressBarView } from "../../../components/progress-bar.view";
import type { PollResultOption } from "../models/poll-result-option.model";

interface Props {
  pollResultOption: PollResultOption;
  totalVotes: number;
}

export const PollResultView = ({ pollResultOption, totalVotes }: Props) => {

  const percentage = totalVotes > 0 ? (pollResultOption.votes / totalVotes) * 100 : 0;

  return (
    <div className='flex flex-col items-center gap-medium p-large w-full bg-background-light-200 border-1 border-background-light-300 rounded-standard'>
      <div className="flex felx-row gap-standard w-full text-background-dark-50 text-title-medium">
        <p className="w-full text-start">{ pollResultOption.text }</p>
        <p>{ percentage ? ` (${percentage.toFixed(0)}%)` : '' }</p>
      </div>

      <ProgressBarView progress={percentage} />

     <p className="text-start w-full text-body-medium text-background-dark-300">{ pollResultOption.votes > 0 ? ` (${pollResultOption.votes} votes)` : ' (No votes)' }</p>
    </div>
  )
}