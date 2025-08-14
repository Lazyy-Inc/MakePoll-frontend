import { createFileRoute } from '@tanstack/react-router'
import { PollVottingScreen } from '../../epic/poll/screens/poll-voting.screen'

export const Route = createFileRoute('/votes-poll/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return <PollVottingScreen id={id} />
}
