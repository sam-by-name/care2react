import React from 'react'

const Header = () => {
  let style = {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold'
  }
  return (
    <div>
      <h1 className='title' style={style}>Care2React</h1>
    </div>
  )
}

export default Header
