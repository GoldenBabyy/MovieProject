import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Nav from "./Navbar";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import MovieDetails from "./MovieDetails";
import { movieActions } from "../_actions";
import { history } from "../_helpers";

function HomePage({ user }, favs) {
  // console.log("asd" + favs);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentView, setCurrentView] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  const [buttonFavText, setButtonFavText] = useState("Favorite");
  const [cobafav, setCobaFav] = useState([]);

  async function fetchData(
    url,
    param,
    nowPlayFlag,
    currentViewFlag,
    pageNumber
  ) {
    const res = await fetch(url + apiKey + param);

    res
      .json()
      .then(
        (res) => setMovies([...res.results]),
        setTotalResults(res.total_results),
        setNowPlaying(nowPlayFlag),
        setCurrentView(currentViewFlag),
        setCurrentPage(pageNumber)
      );
  }

  useEffect(() => {
    fetchData(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=",
      "&language=en-US&page=1",
      true,
      false
    );
    console.log("a");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchTerm);
    fetchData(
      "https://api.themoviedb.org/3/search/movie?api_key=",
      `&query= ${searchTerm}`,
      false,
      true
    );
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const nextPage = (pageNumber) => {
    fetchData(
      "https://api.themoviedb.org/3/search/movie?api_key=",
      `&query=${searchTerm}&page=${pageNumber}`,
      false,
      true,
      pageNumber
    );
  };

  const viewDetails = (id) => {
    const filteredMovie = movies.filter((movie) => movie.id == id);

    // Cek ada movienya atau ngga
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    setCurrentMovie(newCurrentMovie);
  };

  const closeDetails = () => {
    setCurrentMovie(null);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////

  const favButton = (title) => {
    if (buttonFavText == "Favorite") {
      setButtonFavText("UnFavorite");
      movieActions.favorite(title);
    } else {
      setButtonFavText("Favorite");
      movieActions.unFavorite(title);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////

  const numberPages = Math.floor(totalResults / 20);
  return (
    <div className="row">
      <Nav userName={user.firstName} />
      <Link
        to={{
          pathname: "/favorite",
          state: user.firstName,
          movies: { cobafav },
        }}
        className="btn btn-link"
      >
        Favorite Menu
      </Link>

      {currentMovie == null ? (
        <div className="col-lg-12 p-0 m-0">
          {totalResults > 20 && currentMovie == null && !nowPlaying ? (
            <Pagination
              pages={numberPages}
              nextPage={nextPage}
              currentPage={currentPage}
            />
          ) : (
            ""
          )}
          <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
          <MovieList
            currentView={currentView}
            viewDetails={viewDetails}
            favButton={favButton}
            movies={movies}
            fav={buttonFavText}
          />
        </div>
      ) : (
        <MovieDetails currentMovie={currentMovie} closeDetails={closeDetails} />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  // console.log(state);
  const { users, authentication, movieReducer } = state;
  const { user } = authentication;
  const { favs } = movieReducer;
  console.log(favs);
  return {
    user,
    users,
    favs,
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
