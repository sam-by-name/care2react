import React from 'react'
// import {Link} from 'react-router-dom'

class Terminal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    let box = {
      width: '80%',
      height: '80%',
      margin: '5% 5%',
      position: 'absolute',
      backgroundColor: 'black',
      border: '15px solid grey'
    }
    let matrix = {
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
      color: 'limeGreen'
    }
    return (
      <div style={box}><textarea style={matrix}></textarea></div>
    )
  }
}

export default Terminal
