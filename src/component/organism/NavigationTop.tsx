import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppBar, Tabs, Tab } from '@material-ui/core'

import { useStyles } from 'src/constant'
import { SelectionState, State } from 'src/type/state'
import { selectedPage } from 'src/helper'
import { makeSelected } from 'src/store'

export default () => {
  const dispatch = useDispatch()
  const { selection = {} as SelectionState } = useSelector(
    (state: State) => state
  )
  const page = selectedPage(selection)

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
