import React, { useState } from 'react'

import { AppBar, Tabs, Tab } from '@material-ui/core'

import { useStyles } from 'src/constant'

export default () => {
  const [value, setValue] = useState(0)
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.stickTop}>
      <Tabs
        value={value}
        onChange={(_: any, newValue: any) => setValue(newValue)}
        aria-label="simple tabs example"
        scrollButtons="auto"
        variant="scrollable"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </AppBar>
  )
}
