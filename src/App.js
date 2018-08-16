import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './common.components/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path="/" exect />
            <Route path="/detail" />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
