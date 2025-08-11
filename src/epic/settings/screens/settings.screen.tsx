import { useState } from "react"
import { SettingsCheckboxView } from "../views/settings-checkbox.view"

export const SettingsScreen = () => {

  const [isCaptchaEnabled, setIsCaptchaEnabled] = useState(false)

  return (
    <div className="flex flex-col gap-large w-full bg-background-light-50 items-start p-large">
      <p className="text-title-medium">Paramètres du sondage</p>
      <SettingsCheckboxView
        text="Captcha pour accéder au sondage"
        initialValue={isCaptchaEnabled}
        onChange={setIsCaptchaEnabled}
      />
    </div>
  )
}