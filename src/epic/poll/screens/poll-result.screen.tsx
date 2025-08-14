import { PollResultOption } from "../models/poll-result-option.model";
import type { PollModel } from "../models/poll.model";
import { PollResultView } from "../views/poll-result.view";

interface Props {
  poll: PollModel
}

export const PollResultsScreen = ({ poll }: Props) => {
  return (
    <div className='flex flex-col items-center gap-extraLarge p-large w-screen min-h-screen'>
      <p className="text-title-large text-background-dark-50 focus:outline-none">{poll.question}</p>
      <div className="flex flex-col gap-standard w-full max-w-2xl">
          <PollResultView
            pollResultOption={PollResultOption.mock1}
            totalVotes={15}
          />

          <PollResultView
            pollResultOption={PollResultOption.mock2}
            totalVotes={15}
          />
      </div>
    </div>
  );
}