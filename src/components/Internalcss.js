/* eslint-disable react/style-prop-object */
import "../MyCss/ExternalCss.css";

let StuEnroll=()=>{
  return '190120107008';
}
let i =9;
let MyCss = {
  fontSize: "38px",
  fontWeight: "400",
  color: "yellow",
  fontFamily: "monospace",
  backgroundColor: "red",
};
let pStyle = {
  fontSize: "23px",
  color: "blue",
};
const EmployeeStyle = {
  fontSize: "18px",
  color: "yellowgreen",
  fontFamily: "monospace",
};
// eslint-disable-next-line no-unused-vars
const Employee = {
  name: "Arun",
  salary: "48k",
  phone: "6263495645",
  address: "Near Satyamev Hospital 382424",
};

export const InternalCss = () => {
  return (
    <>
      <div style={MyCss}>My Name is Arun Kumar</div>
      <label htmlFor="Search">Search Something...</label>
      <br />
      <input
        type="text"
        id="My-search"
        placeholder="Search.."
        style={{ fontSize: "40px" }}
      />
      <input type="submit" value="search" />
      <div style={EmployeeStyle}>
        <h1>{Employee.name}</h1>
        <h2>{Employee.salary}</h2>
        <h3>{Employee.address}</h3>
      </div>

      <p class="Mycss" style={pStyle}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora fugiat
        quo adipisci sed consectetur veritatis exercitationem quas, suscipit
        aperiam esse nemo asperiores nobis provident sit reprehenderit deserunt,
        sequi incidunt vero.
        <p>HI I am arun Kmar</p>
      </p>

      <h1>
        {i >= 0
          ? "Obtained Ok Number is positive"
          : "Obtained Number id Negative"}
      </h1>
      {StuEnroll()}
    </>
  );
};
