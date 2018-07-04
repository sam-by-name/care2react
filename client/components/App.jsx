import React from 'react'
import Header from './Header'
// import TriForce from './TriForce'
import Shapes from './Shapes'
import Terminal from './Terminal'
import Insults from './Insults'

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
          <Route exact path='/' component={Header} />
          <Route path='/terminal' component={Terminal} />
          <Route path='/shapes' component={Shapes} />
          <Route path='/insults' component={Insults} />
        </div>
      </Router>
    )
  }
}

export default App
