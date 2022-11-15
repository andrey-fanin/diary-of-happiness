import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DayPage.scss";
const DayPage: FunctionComponent = () => {
  const { id } = useParams();
  const [moment, setMoment] = useState({ img: "" });
  const [loaded, setLoaded] = useState(false);

  const moments = [
    { img: "test" },
    { img: "new" },
    { img: "kek" },
    { img: "less" },
  ];
  useEffect(() => {
    if (loaded) return;
    setMoment(moments[1]);
    setLoaded(true);
  }, [loaded]);

  return (
    <>
      <button className="btn btn--back">back</button>
      <div className="container">
        <div className="day-wrapper">
          <div className="day-content">
            <div className="day-carousel">
              <div className="carousel__active-img">
                <div className="carousel__active-img__wrap">
                  <img src={moment?.img} alt="#" />
                </div>
                <div className="carousel__active-img__dropdown">
                  <div className="dropdown__menu">
                    <svg>
                      <path></path>
                    </svg>
                  </div>
                </div>
              </div>
              <ul className="carousel-list">
                {moments.map((item) => (
                  <li
                    className={`carousel-item ${
                      moment.img === item.img ? "carousel-item--active" : ""
                    }`}
                    key={item.img}
                    onClick={() => setMoment(item)}
                  ></li>
                ))}
              </ul>
              <p className="day-descr">Описание дня</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn--add">Добавить момент</button>
    </>
  );
};

export default DayPage;
