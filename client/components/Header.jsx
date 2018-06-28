import React from 'react'
import {Link} from 'react-router-dom'

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
    this.setState({
      count: +1,
      style: {
        color: [this.state.count]
      },
      letterHovered: true
    })
  }

  // handleOnMouseOver: function(e) {
  //   style: red;
  // }
  render () {
    const arrColor = ['red', 'blue', 'green', 'yellow']
    this.style = {
      color: arrColor[this.state.count]
    }
    return (
      <div>
        <div className='mainTit'>
          <div className='h1a' onMouseOver={this.changeColor} style={this.style}><h1>C</h1></div>
          <div className='h1b'><h1>a</h1></div>
          <div className='h1c'><h1>r</h1></div>
          <div className='h1d'><h1>e</h1></div>
          <div className='h1e'><h1>2</h1></div>
          <div className='h1f'><h1>R</h1></div>
          <div className='h1g'><h1>e</h1></div>
          <div className='h1h'><h1>a</h1></div>
          <div className='h1i'><h1>c</h1></div>
          <Link to='/terminal'><div className='h1j'><h1>t</h1></div></Link>
        </div>

        <div className='subTit'>
          <div className='h3a'><h1>A</h1></div>

          <div className='h3b'><h1>r</h1></div>
          <div className='h3c'><h1>e</h1></div>
          <div className='h3d'><h1>a</h1></div>
          <div className='h3e'><h1>c</h1></div>
          <div className='h3f'><h1>t</h1></div>
          <div className='h3g'><h1>i</h1></div>
          <div className='h3h'><h1>v</h1></div>
          <div className='h3i'><h1>e</h1></div>

          <div className='h3j'><h1>p</h1></div>
          <div className='h3l'><h1>l</h1></div>
          <div className='h3m'><h1>a</h1></div>
          <div className='h3n'><h1>y</h1></div>
          <div className='h3o'><h1>g</h1></div>
          <div className='h3p'><h1>r</h1></div>
          <div className='h3q'><h1>o</h1></div>
          <div className='h3r'><h1>u</h1></div>
          <div className='h3s'><h1>n</h1></div>
          <div className='h3t'><h1>d</h1></div>
        </div>

        <div className='signedTit'>
          <div className='h5a'><h1>B</h1></div>
          <div className='h5b'><h1>y</h1></div>

          <Link to='/sam'>
            <div className='h5c'><h1>S</h1></div>
            <div className='h5d'><h1>a</h1></div>
            <div className='h5e'><h1>m</h1></div>
          </Link>
          <div className='h5f'><h1>.</h1></div>
          <div className='h5g'><h1>L</h1></div>
          <div className='h5h'><h1>.</h1></div>
          <Link to='/shapes'><div className='h5i'><h1>S</h1></div></Link>
          <div className='h5j'><h1>a</h1></div>
          <div className='h5k'><h1>n</h1></div>
          <div className='h5l'><h1>d</h1></div>
          <div className='h5m'><h1>e</h1></div>
          <div className='h5n'><h1>r</h1></div>
          <div className='h5o'><h1>s</h1></div>
        </div>
      </div>
    )
  }
}

export default Header
