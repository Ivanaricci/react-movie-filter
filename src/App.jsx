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

  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");

  const addFilm = () => {

    const newFilm = {
      title: newTitle,
      genre: newGenre
    }

    const arrayUpdate = [...arrayFilms, newFilm];
    setFilmFiltered(arrayUpdate);
    arrayFilms.push(newFilm);

    setNewTitle("");
    setNewGenre("")
  }


  const generiUnici = [];
  const newArrayTitle = [...arrayFilms]

  for (let i = 0; i < arrayFilms.length; i++) {
    const genre = arrayFilms[i].genre;

    if (!generiUnici.includes(genre)) {
      generiUnici.push(genre)
    }
  }

  useEffect(() => {
    let filteredArray = arrayFilms

    if (selectedGenre !== '') {
      filteredArray = filteredArray.filter(film => film.genre.includes(selectedGenre));

    }

    if (selectedTitle !== '') {
      filteredArray = filteredArray.filter(film => film.title.includes(selectedTitle));


    };

    setFilmFiltered(filteredArray);



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

        <div className="row">
          <div className="col-12 mb-4">
            <h4>Aggiungi un nuovo Film</h4>
            <input placeholder='Titolo' className='form-control mb-2' type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <input placeholder='Genere' className='form-control mb-2' type="text" value={newGenre} onChange={(e) => setNewGenre(e.target.value)} />
          </div>

          <button className='btn btn-primary' onClick={addFilm}>Aggiungi Film</button>
        </div>
      </div>
    </>
  )
}

export default App
