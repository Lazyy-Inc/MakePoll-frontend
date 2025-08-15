import { useEffect, useState } from "react";
import { PollResultOption } from "../models/poll-result-option.model";
import type { PollModel } from "../models/poll.model";
import { PollService } from "../networks/poll.service";
import { PollResultView } from "../views/poll-result.view";

interface Props {
  id: string
}

export const PollResultsScreen = ({ id }: Props) => {

  const [poll, setPoll] = useState<PollModel | undefined>(undefined);

   useEffect(() => {
      const fetchPoll = async () => {
        try {
          const poll = await PollService.getPoll(id);
          setPoll(poll);
        } catch (error) {
          console.error('Error fetching poll:', error);
        }
      };
  
      fetchPoll();
    }, [id]);

  return (
    <div className='flex flex-col items-center gap-extraLarge p-large w-screen min-h-screen bg-background-light-100'>
      <p className="text-title-large text-background-dark-50 focus:outline-none">{poll?.question}</p>
      <div className="flex flex-col gap-standard w-full max-w-2xl">
          {
            poll?.options.map((option, index) => (
              <PollResultView
                key={index}
                pollResultOption={new PollResultOption(option.text, option.votes)}
                totalVotes={poll.totalVotes}
              />
            ))
          }
      </div>
    </div>
  );
}