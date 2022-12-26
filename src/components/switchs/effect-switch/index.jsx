import React, { useCallback, useState } from 'react'
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
  console.log('effect', effect)
  const storedActive = getChecked(effect)

  const [checked, setChecked] = useFirework(className.canvas_name, storedActive)
  const [checkedState, setCheckState] = useState(effect)

  const handleChange = useCallback(() => {
    console.log(checkedState)
    setCheckState(!checkedState)
    const effect = getEffect(!checkedState)
    Storage.setEffect(effect)
    setChecked(!checkedState)
  })

  return (
    <div htmlFor="effect-switch">
      <div className="effect-switch-firework" onClick={handleChange}>
        {checkedState ? <div className="icon nomalIcon" /> : <div className="icon fireworkIcon" />}
      </div>
    </div>
  )
}
