import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from './private'

import Login from '../pages/login'
import Dados from '../pages/dados'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/perfil/dados" component={Dados} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes
