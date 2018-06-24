import React from 'react'

const TriForce = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  const triangles = {
    width: width / 2,
    height: height / 2,
    r: 256
  }

  let style = {
    color: 'blue',
    position: 'fixed'
  }

  return (
    <svg width={width} height={height}>
      {/* <polygon points='0, 260 150, 0 300, 260' style={style} /> */}
      <circle cx={triangles.width} cy={triangles.height} r={triangles.r} style={style} />
    </svg>
  )
}

export default TriForce
