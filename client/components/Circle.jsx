import React from 'react'
import ArrColors from './colors'

class Circle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      babiesL: [],
      countL: 0,
      babiesR: [],
      countR: 52
    }
    this.multiplyL = this.multiplyL.bind(this, props.circSpace)
    this.multiplyR = this.multiplyR.bind(this, props.circSpace)
  }
  multiplyL (circSpace) {
    const babiesL = []
    const {cx, cy, r} = circSpace

    babiesL.push(
      {cx: cx - 10, cy: cy + 10, r: r}
    )
    setTimeout(() => { this.moreCircsL(babiesL) }, 50)
  }

  moreCircsL (babiesL) {
    this.setState({
      babiesL,
      countL: this.state.countL + 1
    })
  }

  multiplyR (circSpace) {
    const babiesR = []
    const {cx, cy, r} = circSpace

    babiesR.push(
      {cx: cx + 100, cy: cy - 100, r: r}
    )
    setTimeout(() => { this.moreCircsR(babiesR) }, 50)
  }

  moreCircsR (babiesR) {
    this.setState({
      babiesR,
      countR: this.state.countR - 1
    })
  }

  render () {
    const {cx, cy, r} = this.props.circSpace
    return (
      <g>
        <circle cx={cx - 25} cy={cy} r={r} fill={ArrColors[this.state.countL]} style={this.props.circStyle} onMouseOver={this.multiplyL} />
        {this.state.babiesL.map((circSpace, i) => {
          return <Circle key={i} fill={ArrColors[this.state.countL]} circSpace={circSpace} />
        })}
        <circle cx={cx} cy={cy + 25} r={r} fill={ArrColors[this.state.countR]} style={this.props.circStyle} onMouseOver={this.multiplyR} />
        {this.state.babiesR.map((circSpace, i) => {
          return <Circle key={i} fill={ArrColors[this.state.countL]} circSpace={circSpace} />
        })}
      </g>
    )
  }
}

export default Circle
