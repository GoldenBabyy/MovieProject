import React from "react";
import { connect } from "react-redux";

import { userActions } from "../_actions";

import Nav from "./Navbar";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import MovieDetails from "./MovieDetails";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
      currentView: false,
    };
    this.apiKey = process.env.REACT_APP_API_KEY;
  }

  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        this.apiKey +
        "&query=" +
        this.state.searchTerm
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
          currentView: true,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  nextPage = (pageNumber) => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        this.apiKey +
        "&query=" +
        this.state.searchTerm +
        "&page=" +
        pageNumber
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  viewDetails = (id) => {
    const filteredMovie = this.state.movies.filter((movie) => movie.id == id);

    // Cek ada movienya atau ngga
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie });
  };

  closeDetails = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    const { user } = this.props;
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="row">
        <Nav userName={user.firstName} />

        {this.state.currentMovie == null ? (
          <div className="col-lg-12 p-0 m-0">
            {this.state.totalResults > 20 && this.state.currentMovie == null ? (
              <Pagination
                pages={numberPages}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
            ) : (
              ""
            )}
            <SearchBar
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <MovieList
              currentView={this.state.currentView}
              viewDetails={this.viewDetails}
              movies={this.state.movies}
            />
          </div>
        ) : (
          <MovieDetails
            currentMovie={this.state.currentMovie}
            closeDetails={this.closeDetails}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
