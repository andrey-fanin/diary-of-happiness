import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { Link } from "react-router-dom";
import Card from "./Card";

const Home: FunctionComponent = () => {
  let items = [1, 2, 3, 4];
  return (
    <div>
      {items.map((item) => {
        return (
          <Link to={`/card/${item.toString()}`} key={item}>
            <Card />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
