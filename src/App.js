import React from 'react';

import { Switch, Route } from 'react-router-dom'
import Home from './components/home';
import NotHome from './components/nothome';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/nothome' component={NotHome}/>
    </Switch>
  </div>
)

export default App;