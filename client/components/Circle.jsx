import React from 'react'
import ArrColors from './colors'

class Circle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      babiesL: [],
      countL: 0,
      moveL: 0,
      babiesR: [],
      countR: 51,
      moveR: 0
    }
    this.multiplyL = this.multiplyL.bind(this, props.circSpace)
    this.multiplyR = this.multiplyR.bind(this, props.circSpace)
  }
  multiplyL (circSpace) {
    if (this.state.countL % 2) {
      const babiesL = []
      const {cx, cy, r} = circSpace
      babiesL.push(
        {cx: cx + this.state.moveL, cy: cy + this.state.moveL, r: r}
      )
      setTimeout(() => { this.moreCircsL(babiesL) }, 50)
    } else {
      const babiesL = []
      const {cx, cy, r} = circSpace
      babiesL.push(
        {cx: cx - this.state.moveL, cy: cy - this.state.moveL, r: r}
      )
      setTimeout(() => { this.moreCircsL(babiesL) }, 50)
    }
  }

  moreCircsL (babiesL) {
    this.setState({
      babiesL,
      countL: this.state.countL + 1,
      moveL: this.state.moveL + 10
    })
  }

  multiplyR (circSpace) {
    const babiesR = []
    const {cx, cy, r} = circSpace

    babiesR.push(
      {cx: cx + this.state.moveR, cy: cy, r: r}
    )
    setTimeout(() => { this.moreCircsR(babiesR) }, 50)
  }

  moreCircsR (babiesR) {
    this.setState({
      babiesR,
      countR: this.state.countR - 1,
      moveR: this.state.moveR + 10
    })
  }

  render () {
    const {cx, cy, r} = this.props.circSpace
    return (
      <g>
        <circle cx={cx} cy={cy} r={r} fill={ArrColors[this.state.countL]} style={this.props.circStyle} onKeyDown={this.multiplyL} onMouseOut={this.multiplyL} onMouseOver={this.multiplyL} />
        {this.state.babiesL.map((circSpace, i) => {
          return <Circle key={i} fill={ArrColors[this.state.countL]} circSpace={circSpace} />
        })}
        <circle cx={cx - 500} cy={cy} r={r} fill={ArrColors[this.state.countR]} style={this.props.circStyle} onMouseOut={this.multiplyL} onMouseOver={this.multiplyR} />
        {this.state.babiesR.map((circSpace, i) => {
          return <Circle key={i} fill={ArrColors[this.state.countR]} circSpace={circSpace} />
        })}
      </g>
    )
  }
}

export default Circle
