/* eslint-disable no-undef */
import PropTypes from "prop-types";

import React from 'react'


export const FunCompProps = ({name="arun kumar",age=23})=> {
  
  return (
    <div>
      <h4>This is an example of Functinal Component {name} {age>18 ?"Eligible For Army":"Not Eligible for Army"}</h4>
      <h3>{90-9}</h3>
    </div>
  );
}


export default class ImgClassComp extends React.Component {
  static defaultProps = {
    Category: "number not passed",
  };
  render() {
    return (
      <>
        <h1>this is a class Component {this.props.Category}</h1>
      </>
    );
  }
}
ImgClassComp.defaultProps={
      Category:"Sunlight",
};
ImgClassComp.propTypes = 
{
  Category:PropTypes.string,
};



