import React, { Component } from 'react';

class Props1 extends Component {
 
    render() {
     const {f,l}=this.props;
        return (
            <div>
              <h1>First Name:{f}</h1>
              <h1>Last Name:{l}</h1>  
            </div>
        );
    }
}

export default Props1;


