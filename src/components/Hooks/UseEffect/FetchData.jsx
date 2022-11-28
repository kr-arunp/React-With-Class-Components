import React, { useState, useEffect } from 'react'
// @ts-ignore
import axios from 'axios';
const FetchData = () => {
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  let URL = 'https://jsonplaceholder.typicode.com/posts/'
  let URL_COMMENTS='https://jsonplaceholder.typicode.com/comments/'

useEffect(()=>{
 axios.get(URL).then((res)=>{
   console.log(res);
   setPost(res.data);
 })
 .catch((err)=>{
   console.log(err);
 })
},[])
   useEffect(() => {
    axios.get(URL_COMMENTS)
      .then((responseData) => {
        console.log(responseData)
        setComments(responseData.data)
      })
      .catch((error) => {
        console.log('Not Found' + error)
      })
  }, []) 
  return (
    <div>
      <h4>This Is An Example Of Fetching Data From End Point API</h4>
      <div>
      {
      post.map((item, index) => {
        return (
          <ul
            key={item.id}
            style={{
              listStyle: 'circle',
              color: 'green',
              letterSpacing: '1px',
              fontSize: '22px',
            }}
          >
            <li>{item.title}</li>
            <li>
              <pre style={{ color: 'red', fontFamily: 'monospace' }}>
                {item.body}
              </pre>
            </li>
          </ul>
        )
      })
    }
    {
    comments.map((item, index) => {
      return (
          <ul
            key={item.id}
            style={{
              listStyle: 'circle',
              color: 'green',
              letterSpacing: '1px',
              fontSize: '22px',
            }}
            >
            <li>{item.name}</li>
            <li>
              <pre style={{ color: 'red', fontFamily: 'monospace' }}>
                {item.email}
              </pre>
            </li>
          </ul>
        )
      })
    }
      </div>
    </div>
  )
}

export default FetchData
