import React from 'react'
import {Link} from 'react-router-dom'
import {Alpha, ArrColors} from './colors'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      letterHovered: false
    }
    this.changeColor = this.changeColor.bind(this)
    // this.warp = this.warp.bind(this)
    this.transLetter = this.transLetter.bind(this)
  }

  changeColor (event) {
    const cb = Math.floor(Math.random() * 52)
    event.target.style.color = ArrColors[cb]
    this.setState({
      count: +1,
      letterHovered: true
    })
  }

  // warp (event) {
  //   const ranSiz = Math.Floor(Math.random() * 5)
  //   let target = event.Target
  //   target.parentElement.style.fontSize = ranSiz+'vw'
  //   this.setState({
  //     count: +1,
  //     letterHovered: true
  //   })
  // }

  transLetter (event) {
    // for (let i = -1; i < Alpha.length; i++) {
    //   if (event.target.innerHTML == Alpha[i]) {
    //     return (event.target.innerHTML = Alpha[i])
    //   }
    // }
    // let i = 4
    // event.target.innerHTML = Alpha[i]
    let count = Number(event.target.id) + 1
    if (count === 26) {
      count = 0
    }
    event.target.id = count
    event.target.innerHTML = Alpha[count]
    this.setState({
      count: +1
    })
  }

  render () {
    return (
      <div>
        <div className='mainTit'>
          <div className='h1a' onMouseOver={this.changeColor} onMouseOut={this.warp}><h1>C</h1></div>
          <div className='h1b' id='2' onMouseOver={this.changeColor} onClick={this.transLetter}><h1>a</h1></div>
          <div className='h1c' onMouseOver={this.changeColor}><h1>r</h1></div>
          <div className='h1d' onMouseOver={this.changeColor}><h1>e</h1></div>
          <div className='h1e' onMouseOver={this.changeColor}><h1>2</h1></div>
          <div className='h1f' onMouseOver={this.changeColor}><h1>R</h1></div>
          <div className='h1g' onMouseOver={this.changeColor}><h1>e</h1></div>
          <div className='h1h' onMouseOver={this.changeColor}><h1>a</h1></div>
          <div className='h1i' onMouseOver={this.changeColor}><h1>c</h1></div>
          <Link to='/terminal'><div className='h1j' onMouseOver={this.changeColor}><h1>t</h1></div></Link>
        </div>

        <div className='subTit'>
          <div className='h3a' onMouseOver={this.changeColor}><h1>A</h1></div>

          <div className='h3b' onMouseOver={this.changeColor}><h1>r</h1></div>
          <div className='h3c' onMouseOver={this.changeColor}><h1>e</h1></div>
          <div className='h3d' onMouseOver={this.changeColor}><h1>a</h1></div>
          <div className='h3e' onMouseOver={this.changeColor}><h1>c</h1></div>
          <div className='h3f' onMouseOver={this.changeColor}><h1>t</h1></div>
          <div className='h3g' onMouseOver={this.changeColor}><h1>i</h1></div>
          <div className='h3h' onMouseOver={this.changeColor}><h1>v</h1></div>
          <div className='h3i' onMouseOver={this.changeColor}><h1>e</h1></div>

          <div className='h3j' onMouseOver={this.changeColor}><h1>p</h1></div>
          <div className='h3l' onMouseOver={this.changeColor}><h1>l</h1></div>
          <div className='h3m' onMouseOver={this.changeColor}><h1>a</h1></div>
          <div className='h3n' onMouseOver={this.changeColor}><h1>y</h1></div>
          <div className='h3o' onMouseOver={this.changeColor}><h1>g</h1></div>
          <div className='h3p' onMouseOver={this.changeColor}><h1>r</h1></div>
          <div className='h3q' onMouseOver={this.changeColor}><h1>o</h1></div>
          <div className='h3r' onMouseOver={this.changeColor}><h1>u</h1></div>
          <div className='h3s' onMouseOver={this.changeColor}><h1>n</h1></div>
          <div className='h3t' onMouseOver={this.changeColor}><h1>d</h1></div>
        </div>

        <div className='signedTit'>
          <div className='h5a' onMouseOver={this.changeColor}><h1>B</h1></div>
          <div className='h5b' onMouseOver={this.changeColor}><h1>y</h1></div>

          <a href='https://sam-by-name.github.io/'>
            <div className='h5c' onMouseOver={this.changeColor}><h1>S</h1></div>
            <div className='h5d' onMouseOver={this.changeColor}><h1>a</h1></div>
            <div className='h5e' onMouseOver={this.changeColor}><h1>m</h1></div>
          </a>
          <div className='h5f' onMouseOver={this.changeColor}><h1>.</h1></div>
          <div className='h5g' onMouseOver={this.changeColor}><h1>L</h1></div>
          <div className='h5h' onMouseOver={this.changeColor}><h1>.</h1></div>
          <Link to='/Shapes'><div className='h5i' onMouseOver={this.changeColor}><h1>S</h1></div></Link>
          <div className='h5j' onMouseOver={this.changeColor}><h1>a</h1></div>
          <div className='h5k' onMouseOver={this.changeColor}><h1>n</h1></div>
          <div className='h5l' onMouseOver={this.changeColor}><h1>d</h1></div>
          <div className='h5m' onMouseOver={this.changeColor}><h1>e</h1></div>
          <div className='h5n' onMouseOver={this.changeColor}><h1>r</h1></div>
          <div className='h5o' onMouseOver={this.changeColor}><h1>s</h1></div>
        </div>
      </div>
    )
  }
}

export default Header

// style={{color: ArrColors[0]}}
