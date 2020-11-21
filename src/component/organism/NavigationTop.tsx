import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppBar, Tabs, Tab } from '@material-ui/core'

import { useStyles } from 'src/constant'
import { SelectionState, State } from 'src/type/state'
import { makeSelected } from 'src/store'

export default () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { selection = {} as SelectionState } = useSelector(
    (state: State) => state
  )

  const selectedIndex = () => {
    let index = 0
    selection.forEach((v: SelectionState, i: number) => {
      if (v.selected) {
        index = i
      }
    })
    return index
  }
  const [value, setValue] = useState(selectedIndex)
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.stickTop}>
      <Tabs
        value={value}
        onChange={(_: any, newValue: any) => {
          dispatch(makeSelected(newValue))
          setValue(newValue)
          history.push('/')
          // history.go(0)
        }}
        scrollButtons="auto"
        variant="scrollable"
      >
        {selection.map((v: SelectionState, i: number) => (
          <Tab key={i} label={v.pageName} />
        ))}
      </Tabs>
    </AppBar>
  )
}
