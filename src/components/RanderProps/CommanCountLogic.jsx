import React, { Component } from 'react'
 class CommonCountLogic extends Component {
constructor(props) {
  super(props)

  this.state = {
	  count: 0,
  }
}
IncrementCount=()=>{
  this.setState((prevCount)=>{
    return (
    {
    count: prevCount+1,
    }
    )
  })
}
  render() {
	return(
	<>
	<div>
	{this.props.render(this.state.count,this.props.IncrementCount)}
	</div>  
	</> 
	)
  }
}

export default CommonCountLogic;
