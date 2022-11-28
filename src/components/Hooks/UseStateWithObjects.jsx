import React,{useState} from 'react'

const UseStateWithObjects = () => {
    const [car, setCar] = useState({Price: '12lacs',
        name: 'Tata',
        Model: 'New 2023',
        year: '2023',
        color: 'blue',
    });
  return (
    <div>
          <h1>My Car is {car.name}</h1>
          <h1>My Car is color {car.color}</h1>
          <h1>I bought My Car  at { car.Price } Price</h1>
          <h1> I bought my Car in { car.year }</h1>
          <h1>Model Number { car.Model } </h1>
         <label htmlFor="changecolor">Enter new Color: </label>
        <input type="text" name="color" id="color"
         value={car.color}
        onChange={e => setCar({...car,
          [e.target.name]: e.target.value,
        }
        )}/>
        <button >Click Now</button>
    </div>
  )
}

export default UseStateWithObjects