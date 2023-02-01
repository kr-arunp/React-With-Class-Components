import React, { Component } from 'react'

export default class PropsAsMethod extends Component {
  render() {
	return (
	  <div>
	   <button onClick={this.props.Say}>Click to Call</button>
	  </div>
	)
  }
}
