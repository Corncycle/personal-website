import React from 'react'
import { IconContext } from 'react-icons'

export default function CustomIcon({ Icon, value }) {
  return (
    <IconContext.Provider value={value}>
      <Icon />
    </IconContext.Provider>
  )
}

export function OrangeIcon({ Icon }) {
  return (
    <CustomIcon
      Icon={Icon}
      value={{ color: 'orangered', className: 'inline-icon' }}
    />
  )
}

export function GrayIcon({ Icon }) {
  return (
    <CustomIcon
      Icon={Icon}
      value={{ color: 'gray', className: 'inline-icon' }}
    />
  )
}
