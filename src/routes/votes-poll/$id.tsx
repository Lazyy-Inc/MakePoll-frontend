import { createFileRoute } from '@tanstack/react-router'
import { PollModel } from '../../epic/poll/models/poll.model'
import { PollVottingScreen } from '../../epic/poll/screens/poll-voting.screen'

export const Route = createFileRoute('/votes-poll/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return <PollVottingScreen poll={PollModel.mock1} /> // TODO: REPLACE
}
