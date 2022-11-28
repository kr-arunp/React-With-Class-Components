import React from 'react'
import { bookList } from './TempList.mjs'

const BookInfo = bookList.map((item, i) => {
  return (
    <div key={i}>
      {item.title} <br />
      {item.author}
    </div>
  )
})
const Helper = ({ MyData, Stu, Key }) => {
  return (
    <>
      {MyData}
      {Stu}
      {Stu.name}
      <h4>
        First B ook Title is
        {BookInfo[0]}
        <h3>
          And Author is
          {BookInfo[0]}
        </h3>
      </h4>
      <span>
        Book Title is
        {BookInfo[3]}
      </span>
    </>
  )
}

export default Helper
