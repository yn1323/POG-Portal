import React, { useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Flag, Group, Pets, Settings } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
})
interface Icon {
  label: string
  icon: any
  path: string
}

export default () => {
  const history = useHistory()
  const [scene, setScene] = useState(0)
  const classes = useStyles()

  const icons: Icon[] = useMemo(
    () => [
      { label: '人別', icon: <Group />, path: '/' },
      { label: '馬別', icon: <Pets />, path: '/horse' },
      { label: 'レース', icon: <Flag />, path: '/race' },
      { label: '設定', icon: <Settings />, path: '/config' },
    ],
    []
  )

  const transition = (path: string) => history.push(path)

  return (
    <BottomNavigation
      value={scene}
      onChange={(_, newVal) => setScene(newVal)}
      className={classes.stickToBottom}
      showLabels
    >
      {icons.map(({ label, icon, path }: Icon, i: number) => (
        <BottomNavigationAction
          key={i}
          label={label}
          icon={icon}
          onClick={() => transition(path)}
        />
      ))}
    </BottomNavigation>
  )
}
