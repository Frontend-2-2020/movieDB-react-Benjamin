import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export class ProductionCompanyList extends Component {
  render() {
    let { company } = this.props;

    if (company) {
      return (
        <div className="container">
          <div className="row">
            {company.map(comp => (
              <div className="col-3" key={comp.id}>
                <div className="card" style={{ height: "175px" }}>
                  <img
                    className="card-img-top w-100 h-50 m-0 "
                    src={
                      comp.logo_path
                        ? "https://image.tmdb.org/t/p/w300/" + comp.logo_path
                        : "https://via.placeholder.com/300/"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{comp.name}</h5>
                    <p className="card-text">Country: {comp.origin_country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else return <div></div>;
  }
}
