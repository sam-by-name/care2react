import React from 'react'
import {Link} from 'react-router-dom'
import ArrColors from './colors'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      style: {},
      letterHovered: false
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor () {
    let rando = Math.floor(Math.random() * 20)
    this.setState({
      count: rando,
      style: {
        color: [this.state.count]
      },
      letterHovered: true
    })
  }

  render () {
    this.style = {
      color: ArrColors[this.state.count]
    }
    return (
      <div>
        <div className='mainTit'>
          <div className='h1a' onMouseOver={this.changeColor} style={this.style}><h1>C</h1></div>
          <div className='h1b' onMouseOver={this.changeColor} style={this.style}><h1>a</h1></div>
          <div className='h1c' onMouseOver={this.changeColor} style={this.style}><h1>r</h1></div>
          <div className='h1d' onMouseOver={this.changeColor} style={this.style}><h1>e</h1></div>
          <div className='h1e' onMouseOver={this.changeColor} style={this.style}><h1>2</h1></div>
          <div className='h1f' onMouseOver={this.changeColor} style={this.style}><h1>R</h1></div>
          <div className='h1g' onMouseOver={this.changeColor} style={this.style}><h1>e</h1></div>
          <div className='h1h' onMouseOver={this.changeColor} style={this.style}><h1>a</h1></div>
          <div className='h1i' onMouseOver={this.changeColor} style={this.style}><h1>c</h1></div>
          <Link to='/terminal'><div className='h1j' onMouseOver={this.changeColor} style={this.style}><h1>t</h1></div></Link>
        </div>

        <div className='subTit'>
          <div className='h3a' onMouseOver={this.changeColor} style={this.style}><h1>A</h1></div>

          <div className='h3b' onMouseOver={this.changeColor} style={this.style}><h1>r</h1></div>
          <div className='h3c' onMouseOver={this.changeColor} style={this.style}><h1>e</h1></div>
          <div className='h3d' onMouseOver={this.changeColor} style={this.style}><h1>a</h1></div>
          <div className='h3e' onMouseOver={this.changeColor} style={this.style}><h1>c</h1></div>
          <div className='h3f' onMouseOver={this.changeColor} style={this.style}><h1>t</h1></div>
          <div className='h3g' onMouseOver={this.changeColor} style={this.style}><h1>i</h1></div>
          <div className='h3h' onMouseOver={this.changeColor} style={this.style}><h1>v</h1></div>
          <div className='h3i' onMouseOver={this.changeColor} style={this.style}><h1>e</h1></div>

          <div className='h3j' onMouseOver={this.changeColor} style={this.style}><h1>p</h1></div>
          <div className='h3l' onMouseOver={this.changeColor} style={this.style}><h1>l</h1></div>
          <div className='h3m' onMouseOver={this.changeColor} style={this.style}><h1>a</h1></div>
          <div className='h3n' onMouseOver={this.changeColor} style={this.style}><h1>y</h1></div>
          <div className='h3o' onMouseOver={this.changeColor} style={this.style}><h1>g</h1></div>
          <div className='h3p' onMouseOver={this.changeColor} style={this.style}><h1>r</h1></div>
          <div className='h3q' onMouseOver={this.changeColor} style={this.style}><h1>o</h1></div>
          <div className='h3r' onMouseOver={this.changeColor} style={this.style}><h1>u</h1></div>
          <div className='h3s' onMouseOver={this.changeColor} style={this.style}><h1>n</h1></div>
          <div className='h3t' onMouseOver={this.changeColor} style={this.style}><h1>d</h1></div>
        </div>

        <div className='signedTit'>
          <div className='h5a' onMouseOver={this.changeColor} style={this.style}><h1>B</h1></div>
          <div className='h5b' onMouseOver={this.changeColor} style={this.style}><h1>y</h1></div>

          <Link to='/sam'>
            <div className='h5c' onMouseOver={this.changeColor} style={this.style}><h1>S</h1></div>
            <div className='h5d' onMouseOver={this.changeColor} style={this.style}><h1>a</h1></div>
            <div className='h5e' onMouseOver={this.changeColor} style={this.style}><h1>m</h1></div>
          </Link>
          <div className='h5f' onMouseOver={this.changeColor} style={this.style}><h1>.</h1></div>
          <div className='h5g' onMouseOver={this.changeColor} style={this.style}><h1>L</h1></div>
          <div className='h5h' onMouseOver={this.changeColor} style={this.style}><h1>.</h1></div>
          <Link to='/shapes'><div className='h5i' onMouseOver={this.changeColor} style={this.style}><h1>S</h1></div></Link>
          <div className='h5j' onMouseOver={this.changeColor} style={this.style}><h1>a</h1></div>
          <div className='h5k' onMouseOver={this.changeColor} style={this.style}><h1>n</h1></div>
          <div className='h5l' onMouseOver={this.changeColor} style={this.style}><h1>d</h1></div>
          <div className='h5m' onMouseOver={this.changeColor} style={this.style}><h1>e</h1></div>
          <div className='h5n' onMouseOver={this.changeColor} style={this.style}><h1>r</h1></div>
          <div className='h5o' onMouseOver={this.changeColor} style={this.style}><h1>s</h1></div>
        </div>
      </div>
    )
  }
}

export default Header
