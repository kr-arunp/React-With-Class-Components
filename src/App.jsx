import React, { Component } from 'react'
import ConditionalRendering from './components/ConditionalRendering'
import Counter from './components/Counter'
import List from './components/List'
import ParentForDes from './components/ParentForDes'
import PureChild from './components/PureChild'
import PureComponentExample from './components/PureComponentExample'

export default class App extends Component {
  render() {
  
    return (
      <>
      {/* <Counter/> */}
      {/* <ParentForDes/> */}
      {/* <ConditionalRendering/> */}
      {/* <List/> */}
      <PureComponentExample/>
      <PureChild/>
    
      </>
    )
  }
}

