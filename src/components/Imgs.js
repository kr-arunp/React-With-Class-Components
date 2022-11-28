
import React from 'react'
import ImgClassComp  from './Class Components/ImgClass'
import "../MyCss/ImgCss.css";
import { FunCompProps } from "./Class Components/ImgClass";
let img1 = "https://source.unsplash.com/400x400/?city";
let link1="https://www.google.com";
let age=1;
export const Imgs = () => {
  return (
    <>
      <div style={{ backgroundColor:'red', margin: '12px', color: 'yellow', textAlign: 'center',
      display:'flex' ,flexDirection:'column',justifyContent: 'center',alignContent: 'center',flex:'1 3 auto'}}>
        <FunCompProps age={age} />
        <ImgClassComp Category={8555} />
        <ImgClassComp />
        <h1>This is An Example of Images and it is a fuctional Components</h1>
        <div style={{ margin: "10px", padding: "12px" }}>
          <a href={link1} target="_google">
            <img src={img1} alt="Random lore" />
          </a>
          <a href={link1} target="_google">
            <img src={img1} alt="Random lore" />
          </a>

          <a href={link1} target="_google">
            <img src={img1} alt="Random lore" />
          </a>
          <a href={link1} target="_google">
            <img src={img1} alt="Random lore" />
          </a>
        </div>
      </div>
    </>
  );
}

