import { useState, useEffect } from 'react'

const arrayFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  useEffect

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col12">
            <h1>Lista Film</h1>
          </div>
          <div className="col12">
            <ul className="list-group">
              {arrayFilms.map((film) => {
                return (
                  <li className='list-group-item' key={film.id}>
                    <h5>{film.title}</h5>
                    <p>{film.genre}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
