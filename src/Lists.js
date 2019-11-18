import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import "./List";

class Lists extends React.Component {
  constructor(props) {
    super(props);
    const listAcc = JSON.parse(localStorage.getItem("listAcc"));
    this.state = { listAcc };
  }
  render() {
    return (
      <>
        <div className="header">
          <div className="name">ShoppingList</div>
          <Link to={{ pathname: `/` }} className="button1">
            На главную
          </Link>
        </div>

        <div>
          <Link to={{ pathname: `./List1` }} className="button1">
            Список 1
          </Link>
          <Link to={{ pathname: `./List2` }} className="button1">
            Список 2
          </Link>
        </div>
      </>
    );
  }
}

export default Lists;
