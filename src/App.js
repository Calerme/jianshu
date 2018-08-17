import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './common.components/Header'
import Containner from './common.components/PageWrapper'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Containner>
              <Route path="/" exect component={Home} />
              <Route path="/detail" exect />
            </Containner>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
