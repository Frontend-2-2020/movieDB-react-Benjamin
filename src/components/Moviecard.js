import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export class Moviecard extends Component {
  render() {
    const { score, title, date, image, movieId } = this.props;
    const hrefDetail = movieId;

    return (
      <div className="col-4">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Score: {score}</p>
            <p className="card-text">Release-date: {date}</p>
            <a href={hrefDetail} className="btn btn-primary">
              Movie Detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}
