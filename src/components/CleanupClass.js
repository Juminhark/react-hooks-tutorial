import React, { Component } from 'react'

class ForClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: ''
    }
  }

  // 특정인수의 변화에 반응하여 update
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.username !== this.state.username) {
      console.log('will update username')
    }
  }
  // state는 class.field, props는 class.method(arg) 와 같다 생각
  // 가지고 있는 username 과 외부조작으로 인해 바뀐 username을 비교.

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
          <input value={this.state.name} onChange={this.handleName} placeholder='name'/>
          <input value={this.state.username} onChange={this.handleUsername} placeholder='username'/>
        </div>
        <div>
          <div className='span-dispaly'>
            <span> {this.state.name} </span> 
          </div>
          <div className='span-dispaly'>
            <span > {this.state.username} </span>
          </div>
        </div>
      </div>
    )
  }
}

export default class CleanupClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: true
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ 
        shouldRender: false
      })
    }, 8000);
  }

  render() {
    return (
      <div>
        { this.state.shouldRender ? <ForClass /> : null }
      </div>
    )
  }
}
