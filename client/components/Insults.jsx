import React from 'react'
// import {appendInsults} from '../insultApi'

class Insults extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  // getInsulted () {
  //   appendInsults()
  // }

  render () {
    return (
      <div>
        <h1>hi</h1>
        <button type='button' onClick={this.getInsulted}>Wanna feel bad?</button>
      </div>
    )
  }
}

export default Insults
