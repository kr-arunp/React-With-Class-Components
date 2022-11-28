import React from 'react'

class MyForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Fname: '',
      Lname: '',
      Age:'',
        MyTextArea: '',
      selectedTopics:'',
    }
  }

  handleChangeFname = (event) => {
    this.setState({
      Fname: event.target.value,
      //    Lname:event.target.value,
      //    Age:event.target.value,
    })
  }

  handleChangeLname = (event) => {
    this.setState({
      //    Fname:event.target.value,
      Lname: event.target.value,
      //    Age:event.target.value,
    })
  }
  handleChangeAge = (event) => {
    this.setState({
      //    Fname:event.target.value,
      //    Lname:event.target.value,
      Age: event.target.value,
    })
  }

  TextAreaHandler = (event) => {
    this.setState({
      MyTextArea: event.target.value,
    })
    }
    handleChangetopic = (event) => {
        this.setState(
            {
                selectedTopics: event.target.value, 
            }
        )
    }
    handleChangeSubmit = (event) =>
    {
        alert(`Submited data:
        First Name : ${this.state.Fname}
        Last Name : ${this.state.Lname}
        Age : ${this.state.Age}
        Selected FramerWork: ${this.state.selectedTopics}
        TextArea: ${this.state.MyTextArea}
 
       `)       
        event.preventDefault()
    }
    

render()
{
    return (
      <div className="Form">
        <div className="MyForm">
          <h2 style={{ backgroundColor: 'indigo', color: 'White' }}>
            This is a Simple Form in React Js
          </h2>
                <form action="./App.jsp" method="get" onSubmit={this.handleChangeSubmit}>
                    
            <label htmlFor="Fname" className="Fname">
              <span> Enter Your First Name</span>
            </label>
            {/* <legend>This is am example of Form in React </legend> */}
            <input
              type="text"
              id="Fname"
              placeholder="First name"
              autoComplete="on"
              autoFocus={false}
              value={this.state.Fname}
              onChange={this.handleChangeFname}
            />
            <br />
            <label htmlFor="Lname" className="Lname">
              Enter Your Last Name:
            </label>
            <input
              type="text"
              id="Lname"
              placeholder="Last name.."
              value={this.state.Lname}
              onChange={this.handleChangeLname}
            />

            <br />
            <label htmlFor="Age" className="Age">
              <span>Enter Your Age</span>
            </label>
            <input
              type="number"
              name="Age"
              id="Age"
              maxLength={60}
              value={this.state.Age}
              onChange={this.handleChangeAge}
            />
            <br />

            <input
              style={{
                fontSize: '20px',
                marginTop: '10px',
                color: 'white',
              }}
              id="submit"
              type="submit"
              value="Submit"
            />

            <textarea
              id="TextArea"
              value={this.state.MyTextArea}
              onChange={this.TextAreaHandler}
                        rows={12} cols={41}
                        style={{
                            fontSize: '15px',
                            color: 'green',

                            border: '5 px solid yellowgrey',
                            resize:'vertical',
                        }}
                        
                    ></textarea>
                    
                    <label htmlFor="Topics">Select Your Best FramerWork</label>

                    <select
                        value={this.state.selectedTopics}
                        onChange={this.handleChangetopic} >
                        <option>React</option>
                        <option>Angular</option>
                        <option>Vue</option>
                        <option>Spring Boot</option>
                    </select>
          </form>
        </div>
      </div>
    )
  }
}
export default MyForm
