import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import "./CalendarPage.scss";
import Modal from "../components/Modal";

const CalendarPage: FunctionComponent = () => {
  const [active, setActive] = useState(false);
  const moments = [
    { img: "src/assets/img.jpg" },
    { img: "test1", img1: "kek" },
    { img: "test2" },
    { img: "test3" },
    { img: "test4", img1: "kek" },
  ];
  const newMoments = [...moments].reverse();
  const monthes = [
    { title: "Февраль", moments },
    { title: "Март", moments: newMoments },
  ];
  return (
    <>
      <div className="container container--calendar">
        <div className="calendar-wrapper">
          <div className="calendar-content">
            <ul className="month-list">
              {monthes.map((month) => {
                return (
                  <li className="month-item" key={month.title}>
                    <h2 className="month-title">{month.title}</h2>
                    <ul className="month-moments__list">
                      {month.moments.map((item) => {
                        return (
                          <li key={item.img} className="month-moments__item">
                            <div className="moment__main-img">
                              <img src={item.img} alt="#" />
                              <div className="moment-delete__svg">X</div>
                              {Object.keys(item).length > 1 ? (
                                <div className="moment-collection__svg">
                                  +++
                                </div>
                              ) : null}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <button onClick={() => setActive(true)}>Добавить момент</button>
      {active && (
        <Modal active={active} setActive={setActive}>
          <h1>asdasd</h1>
        </Modal>
      )}
    </>
  );
};

export default CalendarPage;
