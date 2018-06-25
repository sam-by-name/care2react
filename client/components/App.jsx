import React from 'react'
import Header from './Header'
// import TriForce from './TriForce'
import Shapes from './Circle'

import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Care2React?'
    }
    // this.pyramid = this.pyramid.bind(this)
  }

  // pyramid () {
  //   console.log(this.state.name)
  // }

  render () {
    return (
      <Router>
        <div className="myBody">
          <Header />
          <Route path='/shapes' component={Shapes} />
        </div>
      </Router>
    )
  }
}

export default App
