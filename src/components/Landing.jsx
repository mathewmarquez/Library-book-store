import React from "react";
//import UndrawBooks from "../assets/Undraw_Books.svg";
import morebooks from "../assets/Library_shelf.png"

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's best online library platform</h1>
            <h2>
              Find your next memorable book with <span className="blue">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Selection</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={morebooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
