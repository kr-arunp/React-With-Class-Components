/* eslint-disable react/jsx-no-undef */
import "../MyCss/form.css";

let Mylogin = {
  fontSize: "19px",
  fontWeight: "800%",
  borderRadius: "29px",
  width: "65%",
  color: "black",
};
const LoginForm = () => {
  return (
    <div class="login-form">
      <div class="form-page">
        <div class="title-form">
          <h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2658/2658071.png"
              alt="can't loaded" id="My-form-icon"
            />
            My Login Page
          </h1>
        </div>
        <form action="#" id="user-form">
          <label htmlFor="UserId">
            <i className="fa fa-user" id="icon"></i>
            Enter Your UserID
          </label>
          <input
            type="text"
            name="UserId"
            placeholder="Eg. Atul94949"
            id="UserId-form"
          />
          <label htmlFor="Passward">
            <i className="fa fa-lock " id="icon"></i>
            <span class="label-text">Enter your password </span>
          </label>
          <input type="password" name="passward " id="pass-form" />
          <label htmlFor="Form-submit"></label>
          <i className="fa fa-arrow-right"></i>
          <input type="submit" value="Login" id="login" style={Mylogin} />
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
