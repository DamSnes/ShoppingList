import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./List";

// const INIT_LISTS = [
//   { name: "Список 1", items: [1, 2, 3], id: 1 },
//   { name: "Список 2", items: [4, 5, 6], id: 2 }
// ];

const Lists = () => {
  return (
    <>
    <div className="header">
    <div className="name">ShoppingList</div>
      <Link to={{ pathname: `/` }} className="button1">На главную</Link>
      
      
      </div>
      
      <div>
      <Link to={{ pathname: `./List1` }} className="button1">
            Список 1
      </Link>
      <Link to={{ pathname: `.s/List2` }} className="button1">
            Список 2
      </Link>
      </div>
      {/* {INIT_LISTS.map((item, index) => (
        <>
          <Link className="button2"
            to={{
              pathname: `/list${item.id}`,
              props: { customProp: "Всё ОК" }
            }}
            key={index}
          >
            {item.name}
          </Link>
          
        </>
      ))} */}
    </>
  );
};

export default Lists;
