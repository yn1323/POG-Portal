import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const Config = lazy(() => import('src/page/Config'))
const Top = lazy(() => import('src/page/Top'))
const HorseData = lazy(() => import('src/page/HorseData'))
const PersonalDetail = lazy(() => import('src/page/PersonalDetail'))
const RecentRace = lazy(() => import('src/page/RecentRace'))
const NotFound = lazy(() => import('src/page/404'))
const Gallery = lazy(() => import('src/page/Gallery'))

const Public: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/config" component={Config} />
      <Route exact path="/horse" component={HorseData} />
      <Route exact path="/detail" component={PersonalDetail} />
      <Route exact path="/race" component={RecentRace} />
      {process.env.NODE_ENV === 'development' && (
        <Route exact path="/gallery" component={Gallery} />
      )}
      <Route component={NotFound} status={404} />
    </Switch>
  )
}

export default Public
