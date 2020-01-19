import React, { Component } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { ProductionCompanyList } from "../components/ProductionCompanyList.js";

export class Detail extends Component {
  state = {
    details: [],
    movieId: ""
  };

  componentDidMount() {
    //id gaan ophalen uit de url, om zo de detail gegevens van de film te gaan ophalen
    let { movieId } = this.state;
    movieId = window.location.pathname;

    Axios(
      "https://api.themoviedb.org/3/movie" +
        movieId +
        "?api_key=9948b3dd87200831b903a852e2144653"
    ).then(response => {
      this.setState({
        details: response.data
      });
    });
  }

  render() {
    const { details } = this.state;
    let poster = "";
    let backdrop = "";
    let company = details.production_companies;

    if (details.backdrop_path) {
      //background Image
      backdrop = "https://image.tmdb.org/t/p/w1280/" + details.backdrop_path;

      //poster URL
      poster = "https://image.tmdb.org/t/p/w300/" + details.poster_path;

      // jumbotron styling
      var jumboStyle = {
        backgroundImage: "url(" + backdrop + ")",
        backgroundSize: "cover"
      };
    }

    return (
      <div>
        <div className="d-flex justify-content-between bg-dark p-4">
          <div className="Title p-1 mb-2 h-auto">
            <h3 className="text-white"> {details.title}</h3>
            <p className="text-warning">
              Release Date:
              <span className="text-white"> {details.release_date}</span>
            </p>
          </div>
          <div className="p-3 mb-2">
            <h3 className="text-warning">
              Score:
              <span className="text-white small">
                {" "}
                {details.vote_average}/10
              </span>
            </h3>
          </div>
        </div>

        <div className="jumbotron jumbotron-fluid" style={jumboStyle}>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src={poster}
                  className="rounded float-left"
                  alt="..."
                ></img>
              </div>

              <div className="col">
                <blockquote className="blockquote">
                  <p className="text-white text-center font-weight-bold">
                    {details.overview}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="row mt-5">
            <ProductionCompanyList company={company} key={details.id} />
          </div>
        </footer>
      </div>
    );
  }
}
