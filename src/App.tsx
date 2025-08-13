import { PollCreationScreen } from './epic/poll/screens/poll-creation.screen'
import { SettingsScreen } from './epic/settings/screens/settings.screen'
import './styles/App.css'

function App() {
  return (
    <div className='flex flex-row w-screen min-h-screen'>
      <PollCreationScreen />
      <SettingsScreen />

    </div>
  )
}

export default App
