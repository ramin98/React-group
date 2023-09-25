function App() {
  let [search, setSearch] = useState("");
  let [arr, setArr] = useState([]);
  let [favorites, setFavorites] = useState([]);

  const fetchData = () => {
    fetch(`https://www.omdbapi.com/?apikey=d554bc03&s=${search}`)
      .then((res) => res.json())
      .then((data) => setArr([...data.Search]));
  };

  const addFilm = (obj) => {
    let film = arr.find((item) => item === obj);
    if (favorites.includes(film)) {
    } else {
      setFavorites([...favorites, film]);
    }

    console.log(favorites);
  };

  const deleteFilm = (obj) => {
    let newArr = favorites.filter((item) => item !== obj);
    setFavorites([...newArr]);
  };

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <input onChange={handleSearch} type="text" />
          <button onClick={fetchData}>SEARCH</button>
          <div>
            {arr.map((item) => {
              return (
                <div key={item.imdbID}>
                  <p>{item.Title}</p>
                  <p>{item.Year}</p>
                  <img src={item.Poster} alt="filmPoster" />
                  <button onClick={() => addFilm(item)}>ADD</button>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <input type="text" />
          <button onClick={() => setFavorites([])}>DELETE ALL</button>
          <ul>
            {favorites.map((item) => {
              return (
                <li key={item.imdbID}>
                  <p>
                    {item.Title}-{item.Year}
                  </p>
                  <button onClick={() => deleteFilm(item)}>X</button>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
