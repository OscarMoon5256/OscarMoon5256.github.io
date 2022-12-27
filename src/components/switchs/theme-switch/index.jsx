import React, { useState, useEffect } from 'react'
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import * as Dom from '../../../utils/dom'
import * as Storage from '../../../utils/storage'
import { THEME } from '../../../constants'

import "./index.scss"

const MoonIcon = () => {
  return (
    <NightlightIcon />
  )
}

const SunIcon = () => {
  return (
    <WbSunnyIcon />
  )
}
function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = checked => {
    const theme = getTheme(checked)

    Storage.setTheme(checked)
    setChecked(checked)
    toggleTheme(theme)
  }

  useEffect(() => {
    const checked = Storage.getTheme(Dom.hasClassOfBody(THEME.DARK))

    handleChange(checked)
  }, [])

  return (
    <div htmlFor="theme-switch">
      <div onClick={() => handleChange(!checked)}>
        {checked ? <div className="floating-icon uncheckedIcon">
          <SunIcon />
        </div> : <div className="floating-icon checkedIcon">
          <MoonIcon />
        </div>}
      </div>
    </div>
  )
}
