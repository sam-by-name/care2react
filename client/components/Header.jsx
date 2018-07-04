import React from 'react'
import {Link} from 'react-router-dom'
import {Alpha, ArrColors, SoundBites} from './colors'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      letterHovered: false
    }
    this.changeColor = this.changeColor.bind(this)
    this.warp = this.warp.bind(this)
    this.disco = this.disco.bind(this)
    this.letterUp = this.letterUp.bind(this)
    this.sound = this.sound.bind(this)
  }

  changeColor (event) {
    const cb = Math.floor(Math.random() * 52)
    event.target.style.color = ArrColors[cb]
    this.setState({
      count: +1,
      letterHovered: true
    })
  }

  warp (event) {
    const ranSiz = Math.Floor(Math.random() * 5)
    event.target.innerHTML.style.fontSize = ranSiz + 'px'
    this.setState({
      count: +1,
      letterHovered: true
    })
  }

  letterUp (event) {
    for (let i = 0; i < Alpha.length; i++) {
      if ((event.target.innerHTML === Alpha[i]) && (event.target.innerHTM !== Alpha[25])) {
        return (event.target.innerHTML = Alpha[i + 1])
      } else if (event.target.innerHTML === 'z') {
        return (event.target.innerHTML = Alpha[0])
      }
    }
    this.setState({
      count: +1
    })
  }
  disco () {
    // const totCount = 9999
    // let count = 0
    for (let i = 1; i <= 46; i++) {
      // if (i === 45) {
      //   i = 0
      // } else if (count === totCount) {
      //   return
      // } else {
      const ranCol = Math.floor(Math.random() * 52)
      document.getElementsByClassName(`h${i}`)[0].style.color = ArrColors[ranCol]
      // count = count + 1
      // }
    }
    this.setState({
      count: +1
    })
  }
  sound () {
    let audio = new Audio(SoundBites[Math.floor(Math.random() * 10)])
    audio.play()
    // audio.pause()
    // audio.currentTime = 0
  }

  render () {
    return (
      <div>
        <div className='mainTit' >
          <div className='h1' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseOut={this.warp} onMouseEnter={this.sound}><h1>c</h1></div>
          <div className='h2' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>a</h1></div>
          <div className='h3' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>r</h1></div>
          <div className='h4' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>e</h1></div>
          <div className='h5' onMouseOver={this.changeColor} onClick={this.disco} onMouseEnter={this.sound} ><h1>2</h1></div>
          <div className='h6' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>R</h1></div>
          <div className='h7' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>e</h1></div>
          <div className='h8' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>a</h1></div>
          <div className='h9' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>c</h1></div>
          <Link to='/terminal'><div className='h10' onMouseOver={this.changeColor} onMouseEnter={this.sound} ><h1>t</h1></div></Link>
        </div>

        <div className='subTit'>
          <div className='h11' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>a</h1></div>

          <div className='h12' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>r</h1></div>
          <div className='h13' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>e</h1></div>
          <div className='h14' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>a</h1></div>
          <div className='h15' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>c</h1></div>
          <div className='h16' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>t</h1></div>
          <div className='h17' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>i</h1></div>
          <div className='h18' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>v</h1></div>
          <div className='h19' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>e</h1></div>

          <div className='h20' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>p</h1></div>
          <div className='h21' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>l</h1></div>
          <div className='h22' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>a</h1></div>
          <div className='h23' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>y</h1></div>
          <div className='h24' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>g</h1></div>
          <div className='h25' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>r</h1></div>
          <div className='h26' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>o</h1></div>
          <div className='h27' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>u</h1></div>
          <div className='h28' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>n</h1></div>
          <div className='h29' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>d</h1></div>
        </div>

        <div className='signedTit'>
          <div className='h30' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>b</h1></div>
          <div className='h31' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>y</h1></div>

          <a href='https://sam-by-name.github.io/'>
            <div className='h32' onMouseOver={this.changeColor} ><h1>S</h1></div>
            <div className='h33' onMouseOver={this.changeColor} ><h1>a</h1></div>
            <div className='h34' onMouseOver={this.changeColor} ><h1>m</h1></div>
          </a>
          <div className='h35' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>.</h1></div>
          <div className='h36' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>l</h1></div>
          <div className='h37' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>.</h1></div>
          <Link to='/Shapes'><div className='h38' onMouseOver={this.changeColor} onMouseEnter={this.sound} ><h1>s</h1></div></Link>
          <div className='h39' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>a</h1></div>
          <div className='h40' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>n</h1></div>
          <div className='h41' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>d</h1></div>
          <div className='h42' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>e</h1></div>
          <div className='h43' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>r</h1></div>
          <div className='h44' onMouseOver={this.changeColor} onClick={this.letterUp} onMouseEnter={this.sound} ><h1>s</h1></div>
        </div>
      </div>
    )
  }
}

export default Header

// style={{color: ArrColors[0]}}
