import React from 'react'
import MovieList from './MovieInfo'
const MovieRender = () => {
  return (
    <>
      <div>
        <h1>This is Moveies Info List</h1>
      </div>

      <ul>
        <MovieRenderList Movies={MovieList} />
      </ul>
    </>
  )
}

export default MovieRender

function MovieRenderList({ Movies }) {
  return (
    <>
      {Movies.map((m1) => {
        return (
          <li key={m1.title} style = { {backgroundColor: 'chocolate',color: 'white',textDecorationLine:'none',textAlign: 'center'}}>
            <h1 style={{ backgroundColor: 'indigo', color: 'whitesmoke',fontStyle:'34px' }}>
              {m1.title}
                </h1>
                <strong style={{
                    fontWeight: 'bold',
            fontFamily: 'monospace'    }}>

                    {m1.title}
                </strong>
            <br />
            <a href={m1.playerUrl} target="_blank">
              Click to see{' '}
            </a>

            <br />
            <a href={m1.boxart} target="_blank">
              Click to see
            </a>

                <br />
                <h5 style={{fontSmooth:'true',}}>

            {m1.trackId}
                </h5>
          </li>
        )
      })}
    </>
  )
}
export { MovieRenderList }
