import { createFileRoute } from '@tanstack/react-router'
import { PollResultsScreen } from '../../epic/poll/screens/poll-result.screen'

export const Route = createFileRoute('/results-poll/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  return <PollResultsScreen id={id} />
}
