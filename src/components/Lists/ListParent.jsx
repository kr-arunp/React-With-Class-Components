import React from 'react'

const ListChild = ({ stu }) => {
  return (
    <>
      <div>ListParent </div>
      {stu.map((item) => {
        return <li>{item}</li>
      })}
    </>
  )
}
export { ListChild }

const StuName = ['arun', 'raju', 'sarun', 'dan', 'chao']
const ListParent = () => {
  return (
    <>
      <div>ListParent</div>

      <ListChild stu={StuName} />
    </>
  )
}

export default ListParent
