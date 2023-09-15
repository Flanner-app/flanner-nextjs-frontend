'use client'

import { useState } from 'react'
import Checkbox from '../shared/Checkbox'

const InitialAuthStep = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Checkbox
      label="Here's my label"
      isChecked={isChecked}
      onChange={() => setIsChecked((prev) => !prev)}
    />
  )
}

export default InitialAuthStep
