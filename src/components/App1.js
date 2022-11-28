









const App1 =() =>
{
  return (
  
    // eslint-disable-next-line no-unreachable
    <div className="container">
      <div className="MyForm">
        <form id="form">
          <label htmlFor="Fname">Enter Your First Name</label>
          <input type="text" name="Fname" id="Fname" className="f" /> <br />
          <br />
          
          <label htmlFor="Lname" className="f">
            Enter Your Last Name
          </label>
          <input type="text" name="Lname" id="Lname" className="f" />
          <br />
          <input type="submit" name="submit" id="submit" className="f" />
        </form>
      </div>
    </div>
  );
 }
export default App1;
