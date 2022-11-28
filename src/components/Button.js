/* eslint-disable no-unused-vars */
function ClickEvent() {

    return alert("Hello,World");    
}
let ClickEvent1=()=>{
    return alert("Hello,World");
}

export function MyButton(){
        return (
          <div>
            {/* <button onClick={ClickEvent()}>Click Here..</button>
          in this case,fuction call automatically so its not works perfectly
        */}
            {/*<button onClick={ClickEvent}>Click Here..</button>
  it works perfectly 
*/}
            {/* <button onClick={alert("Hello World")}>Click Here..</button>
          in this case,fuction call automatically so its not works perfectly
        */}
            {/* <button onClick={ClickEvent()}>Click Here..</button>
          in this case,fuction call automatically so its not works perfectly
        */}

            {/* <button onClick={()=>alert("hello world")}>Click Here..</button>
           it works perfectly */}

            {/*<button onClick={()=>ClickEvent()}>Click Here..</button>
        it works perfectly */}
            {/* <button onClick={ClickEvent1()}>Click Here..</button>
    not works */}
            <button onClick={() => alert("hello world")}>Click Here..</button>
          </div>
        );
}