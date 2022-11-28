import React from 'react';
import MySquare from './Square';
import MyInput from "./Input";
import { useState } from "react";
import './Color.css'
const Main = () => {
  const [colorValue, setColorValue] = useState('');

  return (
    <>
    <div>
       <MySquare 
       colorValue={colorValue } 
       />
    <MyInput
    colorValue={colorValue } 
    setColorValue={setColorValue}
    />
    
    </div>
    
    </>
  )
}

export default Main