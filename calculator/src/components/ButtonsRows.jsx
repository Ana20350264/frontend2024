import React from 'react'
import { Button } from './Button'

export const ButtonsRows = ({buttons}) => {
  return (
    <tr>
        {buttons.map(button => (
            <Button key={button.label} {...button} />
        ))}
    </tr>
  )
}
