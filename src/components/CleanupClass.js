import React, { Component } from 'react'

export default class CleanupClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: ''
    }
    
  }

  componentDidUpdate() {
    console.log('will update username')
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  handleName = (e) => {
    this.setState({
      name: e.target
    })
  };

  handleUsername = (e) => {
    this.setState({
      username: e.target
    })
  };


  render() {
    return (
      <div>
        <div>
          <input value={name} onChange={handleName} placeholder='name'/>
          <input value={username} onChange={handleUsername} placeholder='username'/>
        </div>
        <div>
          <div className='span-dispaly'>
            <span> {name} </span> 
          </div>
          <div className='span-dispaly'>
            <span > {username} </span>
          </div>
        </div>
      </div>
    )
  }
}
