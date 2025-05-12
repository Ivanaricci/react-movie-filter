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

  const [selectedGenre, setSelectedGenre] = useState("");
  const [filmFiltered, setFilmFiltered] = useState(arrayFilms);
  const [selectedTitle, setSelectedTitle] = useState("");


  const generiUnici = [];
  const newArrayTitle = [...arrayFilms]

  for (let i = 0; i < arrayFilms.length; i++) {
    const genre = arrayFilms[i].genre;

    if (!generiUnici.includes(genre)) {
      generiUnici.push(genre)
    }
  }

  useEffect(() => {

    if (selectedGenre === '') {
      setFilmFiltered(arrayFilms);
    }

    else {
      const filteredArray = arrayFilms.filter(film => film.genre.includes(selectedGenre));
      setFilmFiltered(filteredArray);

    };

  }, [selectedGenre, selectedTitle])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col12">
            <h1>Lista Film</h1>
          </div>
          <select class="form-select mb-4" aria-label="Default select example"
            value={selectedGenre}
            onChange={e => setSelectedGenre(e.target.value)}>
            <option value={''}>Cerca per genere</option>
            {generiUnici.map((genere) => {
              return (
                <option key={genere} value={genere}>{genere}</option>
              )
            })}
          </select>

          <select class="form-select mb-4" aria-label="Default select example"
            value={selectedTitle}
            onChange={e => setSelectedTitle(e.target.value)}>
            <option value={''}>Cerca per Titolo</option>
            {newArrayTitle.map((film) => {
              return (
                <option key={film.title} value={film.title}>{film.title}</option>
              )
            })}
          </select>





          <div className="col12">
            <ul className="list-group">
              {filmFiltered.map((film) => {
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
