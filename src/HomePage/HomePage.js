import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Nav from "../Header/Navbar";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import MovieDetails from "./MovieDetails";
import { favoriteMovieAction, removeFavorite } from "../_actions";

function HomePage({ user }, favs) {
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
      false,
      1
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(
      "https://api.themoviedb.org/3/search/movie?api_key=",
      `&query=${searchTerm}`,
      false,
      true,
      1
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

  const dispatch = useDispatch();
  const favButton = (movie) => {
    dispatch(favoriteMovieAction(movie));
  };

  const unfavButton = (id) => {
    console.log("abc");
    dispatch(removeFavorite(id));
  };

  const favMovie = useSelector((state) => state.movieReducer);
  const totalMovie = movies.length;
  const numberPages = Math.floor(totalMovie / 10);

  return (
    <div className="row">
      <Nav
        userName={user.firstName}
        viewDetails={viewDetails}
        favButton={favButton}
        unfavButton={unfavButton}
        menu={"Home"}
      />

      {currentMovie == null ? (
        <div className="col-lg-12 p-0 m-0">
          {totalMovie > 10 && currentMovie == null && !nowPlaying ? (
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
            favFlag={false}
            unfavButton={unfavButton}
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
  const { users, authentication, movieReducer } = state;
  const { user } = authentication;
  const { favs } = movieReducer;
  return {
    user,
    users,
    favs,
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
