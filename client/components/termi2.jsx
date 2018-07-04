import React from 'react'
// import {Link} from 'react-router-dom'

class Terminal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: new Array("'There are only 10 types of people in the world','Those who understand binary, and those who don't'"),
      delay: 100,
      startArr: 0,
      arrLength: this.state.input[0].length,
      scrollAt: 20,
      iniPos: 0,
      iniConts: '',
      iniRow: 0
    }
    this.aIWriter = this.aIWriter.bind(this)
  }

  aIWriter () {
    this.iniConts = ' '
    this.iniRow = Math.max(0, this.startArr - this.scrollAt)

    while (this.iniRow < this.startArr) {
      this.iniConts += this.state.input[this.iniRow++] + '<br />'
    }
    document.getElementById('aITalks').innerHTML = this.iniConts +
    this.state[this.startArr].substring(0, this.iniPos) + '|'

    if (this.iniPos++ === this.arrLength) {
      this.iniPos = 0
      this.startArr++
      if (this.startArr !== this.state.input.length) {
        this.arrLength = this.state.input.length
        setTimeout(this.aIWriter(), 500)
      }
    } else {
      setTimeout(this.aIWriter(), this.delay)
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
          <textarea id='aITalks' onClick={this.aIWriter()} style={matrix}>
          </textarea>
        </div>
      </div>
    )
  }
}

export default Terminal
