import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="blue">Books</span>
          </h2>
          <Link to="/books">
            <button className="btn">Explore more books</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
