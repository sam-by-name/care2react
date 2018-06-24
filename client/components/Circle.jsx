import React from 'react'
// import BabyTriangles from './BabyTriangles'

const Circles = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  // const width = 1893
  // const height = 962

  const triangles = {
    width: width / 2,
    height: height / 2,
    r: 256
  }

  let circStyle = {
    fill: 'black',
    stroke: 'blue',
    strokeWidth: '5',
    fillRule: 'evenodd',
    position: 'absolute'
  }

  return (
    <svg className='shapeBody' width={width} height={height}>
      <circle cx={triangles.width} cy={triangles.height} r={triangles.r} style={circStyle} />
    </svg>
  )
}

export default Circles
