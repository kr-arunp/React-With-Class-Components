import React from 'react'
const List = () => {
    const name=['Arun','Hina','Aaksah','Abhi'];
    let nameList=name.map(name=><h2>{name}</h2>);
  return (
    <div>
      {/* <h1>{name.map(name=><h2>{name}</h2>)}</h1> */}
      {/* <h1>{name.filter((name)=><h2>{name}</h2>)}</h1> */}
      {nameList}
    </div>
  )
}

export default List