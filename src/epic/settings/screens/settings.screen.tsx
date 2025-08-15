import { useState } from "react"
import { SettingsCheckboxView } from "../views/settings-checkbox.view"

export const SettingsScreen = () => {

  const [isCaptchaEnabled, setIsCaptchaEnabled] = useState(false)

  return (
    <div className="flex flex-col gap-large w-full h-screen bg-background-light-50 items-start p-large">
      <p className="text-title-medium text-background-dark-50">Paramètres du sondage</p>
      <SettingsCheckboxView
        text="Captcha pour accéder au sondage"
        initialValue={isCaptchaEnabled}
        onChange={setIsCaptchaEnabled}
      />
    </div>
  )
}