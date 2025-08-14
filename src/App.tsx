import { PollModel } from './epic/poll/models/poll.model'
import { PollResultsScreen } from './epic/poll/screens/poll-result.screen'
import './styles/App.css'

function App() {
  return (
    <div className='flex flex-row w-screen min-h-screen'>
      <PollResultsScreen poll={PollModel.mock1} />
      { /*
      <PollCreationScreen />
      <SettingsScreen />
      */ }
    </div>
  )
}

export default App
