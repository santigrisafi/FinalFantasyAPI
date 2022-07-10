import { React } from "react";
import "../styles/Search.css";
import logo from "./../assets/title.png";

let Search = ({ term, setTerm, filter, setFilter }) => {
  window.onload = () => {
    return setFilter("characters");
  };
  return (
    <>
      <a href="#">
        <img src={logo} className="logo" alt="Moogle Search" />
      </a>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 text-dark">
          <div className="card">
            <div className="input-box">
              <input
                type="search"
                className="form-control"
                placeholder="Input Term"
                onChange={(event) => setTerm(event.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="characters"
              onClick={() => setFilter("characters")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Characters
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="monsters"
              onClick={() => setFilter("monsters")}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Monsters
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export { Search };
