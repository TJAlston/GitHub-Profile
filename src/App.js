import React, { Component } from 'react'
import Avatar from './Avatar'
import Followers from './Followers'
import 'whatwg-fetch'

class App extends Component {

  constructor () {
    super()
    this.state = {
      user: 'TJAlston',
      userData: {}
    }
  }

  componentDidMount () {
    fetch(`https://api.github.com/users/${this.state.user}?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        this.setState({ userData: data })
      })
  }

  render () {
    return <div className='App'>
      <Avatar id={this.state.userData.id} />
       <div className='Name'> TJ ALSTON </div>
       <div className='Bio'>Front End Engineer Student</div>
      <Followers url={this.state.userData.followers_url} />
    </div>
  }
}

export default App
