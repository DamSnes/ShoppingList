import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const INIT_LISTS = [
  { name: "Список 1", items: [1, 2, 3], id: 0 },
  { name: "Список 2", items: [4, 5, 6], id: 523412341234123 }
];

const Lists = () => {
  return (
    <>
      <Link to={{ pathname: `/` }}>На главную</Link>
      <br />
      {INIT_LISTS.map((item, index) => (
        <>
          <Link
            to={{
              pathname: `/list${item.id}`,
              props: { customProp: "lalala" }
            }}
            key={index}
          >
            {item.name}
          </Link>
          <br />
        </>
      ))}
    </>
  );
};

export default Lists;
