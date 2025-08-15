import { observer } from 'mobx-react-lite'
import { BannerView } from './components/banner.view'
import { BannerManager } from './core/banner.manager'
import { PollCreationScreen } from './epic/poll/screens/poll-creation.screen'
import { SettingsScreen } from './epic/settings/screens/settings.screen'
import './styles/App.css'

export const App = observer(() => {
  const bannerManager = BannerManager.shared

  return (
    <div className='flex flex-row w-screen min-h-screen relative'>
      {bannerManager.banner && (
        <BannerView banner={bannerManager.banner} />
      )}
      
      <PollCreationScreen />
      <SettingsScreen />
    </div>
  )
})