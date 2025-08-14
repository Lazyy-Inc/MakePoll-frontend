import { createFileRoute } from '@tanstack/react-router'
import { PollCreationScreen } from '../epic/poll/screens/poll-creation.screen'

export const Route = createFileRoute('/create-poll')({
  component: PollCreationScreen
})