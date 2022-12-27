import React, { useCallback, useState } from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import * as Storage from '../../../utils/storage'
import { EFFECT, className } from '../../../constants'
import { useFirework } from '../../../hooks/useFirework'

import './index.scss'

function getChecked(effect) {
  return effect === EFFECT.FIREWORK ? true : false
}

function getEffect(checked) {
  return checked ? EFFECT.FIREWORK : EFFECT.NOMAL
}

export const EffectSwitch = () => {
  const effect = Storage.getEffect(EFFECT.FIREWORK)
  const storedActive = getChecked(effect)
  const [checked, setChecked] = useFirework(className.canvas_name, storedActive)
  const [fireEffect, setFireEffect] = useState(checked)

  const handleChange = useCallback(_ => {
    const effect = getEffect(!fireEffect)
    Storage.setEffect(effect)
    setChecked(!fireEffect)
    setFireEffect(!fireEffect)
  })

  return (
    <div htmlFor="effect-switch">
      <div className="effect-switch-firework" onClick={handleChange}>
        <div className="floating-icon">
          {checked ? <CloudIcon /> : <AutoAwesomeIcon />}
        </div>
      </div>
    </div>
  )
}
