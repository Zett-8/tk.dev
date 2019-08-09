import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HeaderContainer from './containers/headerContainer'
import TopPageContainer from './containers/topPageContainer'
import WorkPageContainer from './containers/workPageContainer'

export default () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={HeaderContainer} />
        <Route exact path="/" component={TopPageContainer} />
        <Route exact path="/work/:info" component={WorkPageContainer} />
      </React.Fragment>
    </Router>
  )
}
