import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Care2React?'
    }
  }
  render () {
    return (
      <h1>{this.state.name}</h1>
    )
  }
}

export default App
