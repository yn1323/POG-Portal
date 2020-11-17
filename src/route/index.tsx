import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelected } from 'src/helper'

const Config = lazy(() => import('src/page/Config'))
const Top = lazy(() => import('src/page/Top'))
const HorseData = lazy(() => import('src/page/HorseData'))
const PersonalDetail = lazy(() => import('src/page/PersonalDetail'))
const RecentRace = lazy(() => import('src/page/RecentRace'))
const NotFound = lazy(() => import('src/page/404'))
const Gallery = lazy(() => import('src/page/Gallery'))

export default () => {
  const hasUrl = useSelected()
  return (
    <Switch>
      {hasUrl && <Route exact path="/" component={Top} />}
      {hasUrl && <Route exact path="/horse" component={HorseData} />}
      {hasUrl && <Route exact path="/detail" component={PersonalDetail} />}
      {hasUrl && <Route exact path="/race" component={RecentRace} />}

      <Route exact path="/config" component={Config} />
      {process.env.NODE_ENV === 'development' && (
        <Route exact path="/gallery" component={Gallery} />
      )}
      <Route component={NotFound} status={404} />
    </Switch>
  )
}
