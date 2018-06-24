import React from 'react'
// import BabyTriangles from './BabyTriangles'

const TriForce = () => {
  // const width = window.innerWidth
  // const height = window.innerHeight
  const width = 1893
  const height = 962

  const triangles = {
    width: width / 2,
    height: height / 2,
    r: 256
  }

  const box = {
    margin: 0
  }

  let triStyle = {
    fill: 'lime',
    stroke: 'purple',
    strokeWidth: '5',
    fillRule: 'evenodd'
  }
  let circStyle = {
    fill: 'black',
    stroke: 'blue',
    strokeWidth: '5',
    fillRule: 'evenodd'
  }

  return (
    <svg className='shapeBody' width={width} height={height}>
      <polygon points='100, 10 40,198 190,78 10,78 160, 198' style={triStyle} />
      <circle cx={triangles.width} cy={triangles.height} r={triangles.r} style={circStyle} />
    </svg>
  )
}
// onMouseOver={BabyTriangles}
export default TriForce
