import React, { Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Moviecard } from "../components/Moviecard";

export class Home extends Component {
  state = {
    movies: []
  };

  //alle movies ophalen en opslaan in de state
  componentDidMount() {
    Axios(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9948b3dd87200831b903a852e2144653"
    ).then(response => {
      this.setState({
        movies: response.data.results
      });
    });
  }

  render() {
    const { movies } = this.state;

    //movie component renderen naar de homepage en hiervoor de nodige props meegeven
    return (
      <div className="container">
        <div id="overview" className="row">
          {movies.map(movie => (
            <Moviecard
              score={movie.vote_average}
              title={movie.title}
              date={movie.release_date}
              image={"https://image.tmdb.org/t/p/w342" + movie.poster_path}
              movieId={movie.id}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }
}
