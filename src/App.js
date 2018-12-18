import "babel-polyfill";
import React from 'react';
import { HashRouter as Router } from 'react-router-dom' // BrowserRouter
//  Route, Link, Switch
import { renderRoutes } from 'react-router-config'
import { hot } from 'react-hot-loader'
import routes from './routes/router'
import { Provider } from 'react-redux'
import store from './rematch/index'

import './style/reset.scss'
import { Header } from './components/index'

const App = () => (
  <div className="App">
    <Header></Header>
    <Router>
        {renderRoutes(routes)}
    </Router>
  </div>
)
const reduxApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

export default hot(module)(reduxApp);
