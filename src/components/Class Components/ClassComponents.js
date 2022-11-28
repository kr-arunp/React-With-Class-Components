import React from 'react';

export default class ClassComponents extends React.Component
{
   
   constructor(){
         super()
        this.state={
            count:0
        };
        //  this.Update= this.Update.bind(this);
        //  this.Decrement= this.Decrement.bind(this);
    }
   Update(){
        this.setState(
            {
            count:this.state.count+1,
            },console.log("re-render")
            )
    }
    Decrement=()=>{
        this.setState(
            {
               count:this.state.count-1,
            },console.log("re-render") )
    }

 render(){
    return(
        <>   <div style={{textAlign: 'center' ,backgroundColor: 'indigo',color:"white",padding:'23px'}}>
        <button onClick={()=>this.Update()} style={{fontSize:'22px' ,width:'50px',height: '45px', marginTop:'43px'}}>+</button>
        <h1 style={{fontSize:'82px'}}>{this.state.count}</h1>
        <button onClick={this.Decrement} style={{fontSize:'22px' ,width:'50px',height: '45px',marginBottom:'43px'}}>-</button>
</div>

       </>
       );
}
 }
