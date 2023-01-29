/** @format */

import React, { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: error,
    };
  }
  componentDidCatch(error, info) {
    // It will catch error in any component below. We can also log the error to an error reporting service.
   
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went Wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
