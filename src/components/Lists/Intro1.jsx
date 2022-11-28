import React from 'react-dom'
import Helper from './Helper'
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const StuInfo = [
  {
    id: 1220349,
    name: 'ArunKumar',
    age: 23,
    gender: 'M'
  }
]
let StuData = StuInfo.map(item => {
  return (
    <div key={item.id}>
      {item.name}
      {item.age}
      {item.gender}
      {item.id}
    </div>
  )
})
let listData = data.map(item => {
  return <li key={item}>{item}</li>
})
const Intro = () => {
  return (
    <>
      <h1>Hello World</h1>
      <ul style={{ listStyle: 'lower-roman' }}>{listData}</ul>
      <Helper MyData={listData} Key={listData} Stu={StuData} />
    </>
  )
}
export default Intro
