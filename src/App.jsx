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

  const generiUnici = [];

  for (let i = 0; i < arrayFilms.length; i++) {
    const genre = arrayFilms[i].genre;

    if (!generiUnici.includes(genre)) {
      generiUnici.push(genre)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col12">
            <h1>Lista Film</h1>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Cerca per genere</option>
            {generiUnici.map((genere) => {
              return (
                <option value={genere}>{genere}</option>
              )
            })}




          </select>
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
