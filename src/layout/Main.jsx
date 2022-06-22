import React, { Component } from "react";
import Movies from "../components/Movies";
import Loading from "./Loading";
import Search from "./Search";

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=panda`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovie = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=329ffa13&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="col-8 row searchMeal mx-auto my-5">
        <Search searchMovie={this.searchMovie} />
        <div className="products-list bg-danger mb-5 mt-3 text-center col-12">
          <h2 className="col-12 ">Your Search Results:</h2>
        </div>
        <div className="search-result mb-5">
          <div className="row">
            {loading ? <Loading /> : <Movies movies={this.state.movies} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
