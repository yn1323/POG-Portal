import React, { useState } from 'react'

import { AppBar, Tabs, Tab } from '@material-ui/core'

export default () => {
  const [value, setValue] = useState(0)

  return (
    <AppBar position="static">
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
