import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import "./Card.module.scss";

const Card: FunctionComponent = () => {
  const { id } = useParams();
  return <div className="card">test {id}</div>;
};

export default Card;
