import React, { Component } from 'react'

const Stu = {
	name: "Rahul",
	branch: "CE",
	age: "45"  
}
class DeProps extends Component {
	render(props) {
		console.log("🚀 ~ file: DefaultProps.jsx:11 ~ DeProps ~ render ~ this.props", this.props)
		const { name, age, branch }=this.props.Stu
		return (
      <div>
      
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{branch}</h1>
      </div>
    );
	}
} 
DeProps.defaultProps=
{
	Stu: {
		name: "Rahul",
		branch: "CE",
		age: "45"
	}
}
export default DeProps;
