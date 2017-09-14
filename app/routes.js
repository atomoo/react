import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import About from './page/about/About'
import List from './page/list/List'
import asyncComponent from './asyncComponent'
const homePage = asyncComponent(() => import(/* webpackChunkName: "home" */ './page/home/Home'));
export default (
    <Router>
        <Switch>
            <Route exact path="/" component={homePage}/>
            <Route path="/about" component={About}/>
            <Route path="/list" component={List}/>
        </Switch>
  </Router>
)