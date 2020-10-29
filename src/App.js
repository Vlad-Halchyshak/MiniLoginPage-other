import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Dublicate } from './components/1a/dublicate.js'
import { Last } from './components/1b/lastMethod.js'
import { Unique } from './components/1c/unique.js'
import { ParseNPMVersion } from './components/1d/parseNPMVersion';
import { LoginPage } from './components/loginPage/login';
import {GetTeamArticlesDescription} from './components/2a/Transformation.js'
function App() {
  return (
    <div>
      <Dublicate />
      <Last />
      <Unique />
      <ParseNPMVersion />
      
        <GetTeamArticlesDescription />
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
