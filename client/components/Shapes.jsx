import React from 'react'
// import BabyTriangles from './BabyTriangles'
import {HashRouter as Link} from 'react-router-dom'
// import Tri from './Tri'
import Circle from './Circle'

const Shapes = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  // const width = 1893
  // const height = 962

  const circSpace = {
    cx: width / 2,
    cy: height / 2,
    r: 50
  }

  let circStyle = {
    stroke: 'blue',
    strokeWidth: '5',
    fillRule: 'evenodd',
    position: 'absolute'
  }

  // let triStyle = {
  //   fill: 'lime',
  //   stroke: 'purple',
  //   strokeWidth: '5',
  //   fillRule: 'evenodd',
  //   position: 'absolute',
  //   zIndex: '100'
  // }
  // let points = {
  //   a: 100,
  //   b: 10,
  //   c: 40,
  //   d: 198,
  //   e: 190,
  //   f: 78,
  //   g: 10,
  //   h: 78,
  //   i: 160,
  //   j: 198
  // }

  return (
    <Link to='/'>
      <svg className='shapeBody' width={width} height={height}>
        {/* <Tri triStyle={triStyle} points={points} /> */}
        {/* <Tri points='100, 10 40,198 190,78 10,78 160, 198' style={triStyle} /> */}
        {/* <circle cx={triangles.width} cy={triangles.height} r={triangles.r} style={circStyle} /> */}
        <Circle circStyle={circStyle} circSpace={circSpace} />
      </svg>
    </Link>
  )
}

export default Shapes
