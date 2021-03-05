import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import PokeCards from "./components/PokeCards";
import Pagination from "./components/Pagination";
import axios from "axios";
import { useState, useEffect } from "react";
import PokeDetail from "./components/PokeDetail";

function App() {
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage] = useState(5);

  useEffect(() => {
    const getPoke = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=200`
      );
      setPoke(res.data.results);
      setLoading(false);
    };
    getPoke();
  }, []);

  // Get current posts
  const indexOfLastPoke = currentPage * pokePerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
  const currentPoke = poke.slice(indexOfFirstPoke, indexOfLastPoke);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(poke);
  return (
    <div className="App">
      <Route exact path="/" render={() => <Intro />} />
      <Route
        path="/pokemon"
        render={() => (
          <>
            {" "}
            <Nav />
            <PokeCards poke={currentPoke} loading={loading} />
            <Pagination
              pokePerPage={pokePerPage}
              totalPokes={poke.length}
              paginate={paginate}
            />
            <Route path="/detail" render={() => <PokeDetail />} />
          </>
        )}
      />
    </div>
  );
}

export default App;
