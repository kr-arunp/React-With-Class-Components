import React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
 let list3=[12,21,2,1,2,3,3,2,3,333];
 let list2=[1,2,3,4,5,4,65];
const ListInto = () => {
  return (
    <div>
      <div>
        {list.map((item)=>{
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>Hi my name {item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      
      </div>

      <h1>
        Hi i am Arun Kumar
        {
          list2.map((item)=>{
            return(
              <h1 key={item}>
                {item}
             </h1>
            )
          })
        }
        {
       list3.map((it))

        }
      </h1>

    </div>
  );
}

export default ListInto