/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
export let MyName = (props) => {
  return (
    <div>
      <h1>
        My name is {props.Fname} {props.Lname}
      </h1>
    </div>
  );
};
MyName.defaultProps = {
  Fname: "Arun",
  Lname: "kumar prajapati",
};
MyName.propTypes={
Lname:PropTypes.string,
}