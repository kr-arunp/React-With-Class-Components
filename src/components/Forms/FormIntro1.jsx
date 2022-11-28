import React from 'react'
import { useState } from 'react'
import './FormIntro1.css'
const FormIntro = () => {
  // const [Fname, setFname] = useState('')
  // const [Lname, setLname] = useState('')
  // const [Age, setAge] = useState('')

  const [SumbitForm, setSumbitForm] = useState({
    Fname: '',
    Lname: '',
    Age: '',
  })

  const [records, setRecords] = useState([])
  const OnSumbitForm = (e) => {
    const name = e.target.name
    const value = e.target.value
    // console.log(name+"" +value);
    setSumbitForm({ ...SumbitForm, [name]: value })
  }

  //   const onHandlerFanme = (event) => {
  //     setFname(event.target.value)
  //   }

  //   const onHandlerLanme = (event) => {
  //     setLname(event.target.value)
  //   }

  //   const onHandlerAge = (event) => {
  //     setAge(event.target.value)
  //   }
  //   const FormInfo = []
  //   const Submit = (event) => {
  //     FormInfo[0] = { Fname }
  //     FormInfo[1] = { Lname }
  //     FormInfo[2] = { Age }
  //     event.preventDefault()

  //     alert(
  //       `Form Data
  //             First Name:${Fname}
  //             Last Name:${Lname}
  //             Age:${Age}`,
  //     )
  //   }

  //   const Form_Information = FormInfo.map((item) => {
  //     return
  //     ;<li>{item}</li>
  //   })

  const OnSumbitFormHandler = (e) => {
    e.preventDefault()
    const newRecords = { ...SumbitForm, id: new Date().getTime().toString() }
    // console.log(newRecords)
      setRecords([...records, newRecords])
      setSumbitForm({Fname:'',Lname:'',Age:''})
  }

  return (
    <>
      <div className="Form">
        <div className="MyForm">
          <h2 style={{ backgroundColor: 'indigo', color: 'White' }}>
            This is a Simple Form in React Js
          </h2>
          <form action="./App.jsp" method="get">
            <label htmlFor="Fname" className="Fname">
              <span> Enter Your First Name</span>
            </label>
            <input
              type="text"
              id="Fname"
              value={SumbitForm.Fname}
              onChange={OnSumbitForm}
              placeholder="First name"
              autoComplete="on"
              autoFocus={true}
              name="Fname"
            />
            <br />
            <label htmlFor="Lname" className="Lname">
              Enter Your Last Name:
            </label>
            <input
              type="text"
              id="Lname"
              placeholder="Last name.."
              name="Lname"
              value={SumbitForm.Lname}
              onChange={OnSumbitForm}
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
              value={SumbitForm.Age}
              onChange={OnSumbitForm}
            />

            {/* <input
              style={{
                fontSize: '20px',
                marginTop: '10px',
                color: 'white',
              }}
              id="submit"
              type="submit"
              value="Submit"
              onClick={Submit}
                      /> */}
            <input
              type="submit"
              id="submit"
              value="Submit"
              style={{
                fontSize: '20px',
                marginTop: '10px',
                color: 'white',
              }}
              onClick={OnSumbitFormHandler}
            />
          </form>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0px',
        paddingTop: '22px'

      }}>
        <h6>

 {records.map((item) => {
            return (
               <ul>
                <li key={item.id}
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    border: '2px solid blue',
                    padding: '10px',
                    listStyle:'number'

                  }}>
                    <span style={{
                        color: 'red',
                        marginRight:'12px'
                    }}>

                  {item.Fname}
                    </span>
                    <span style={{
                        color: 'green',
                        marginRight: '12px'
                    }}
                    >

                 {item.Lname}
                    </span>
                    <span
                     style={{
                        color: 'yellowgreen',
                        marginRight: '12px'
                    }}>

                    {item.Age}
                    </span>
                </li>
               </ul>
                 
            )
        })}
    
          
        </h6>
       
      </div>
    </>
  )
}

export default FormIntro
