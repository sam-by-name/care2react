import React from 'react'
// import {Link} from 'react-router-dom'

const Terminal = () => {
  var box = {
    width: '80%',
    height: '80%',
    margin: '5% 5%',
    position: 'absolute',
    backgroundColor: 'black',
    border: '15px solid grey'
  }
  var matrix = {
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
      <div onClick={aIWriter} style={box}>
        <textarea id='aITalks' style={matrix}>
        </textarea>
      </div>
    </div>
  )
}

var aIWriter = () => {
  var input = "There are only 10 types of people in the world, Those who understand binary, and those who don't"
  var arr = input.split('', 9999)
  var delay = 100
  var startArr = 0
  var arrLength = arr[0].length
  var scrollAt = 20
  var iniPos = 0
  var iniConts = ''
  var iniRow

  iniConts = ' '
  iniRow = Math.max(0, startArr - scrollAt)
  // var desti = document.getElementById('aITalks')

  while (iniRow < startArr) {
    iniConts += arr[iniRow++] + '<br />'
  }
  document.getElementById('aITalks').innerHTML = iniConts + arr[startArr] + '|'
  if (iniPos++ === arrLength) {
    iniPos = 0
    startArr++
    if (startArr !== arr.length) {
      arrLength = arr.length
      setTimeout(Terminal(), 500)
    }
  } else {
    setTimeout(Terminal(), delay)
  }
}

export default Terminal
