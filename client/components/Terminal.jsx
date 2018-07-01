import React from 'react'
// import {Link} from 'react-router-dom'
// import String from './string'

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
      width: '80%',
      height: '80%',
      color: 'limeGreen',
      border: 'none',
      margin: '10% 10%',
      resize: 'none'
    }
    return (
      <div>
        <div style={box}>
          <textarea id='aITalks' style={matrix}>
          </textarea>
        </div>
      </div>
    )
  }
}

export default Terminal
