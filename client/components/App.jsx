import React from 'react'
import Header from './Header'
import TriForce from './TriForce'
// import Circle from './Circle'

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
      <div className="myBody">
        <Header />
        <TriForce />
        {/* <Circle /> */}
      </div>
    )
  }
}

export default App
