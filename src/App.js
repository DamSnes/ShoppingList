import React from "react";
import "./App.css";
import "./item";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="name">ShoppingList</div>
          <Link to={{ pathname: "/shoppingLists" }} className="button1">
            К списку покупок
          </Link>
        </div>

        <div className="list">
          <p className="mainText">ДОБРО ПОЖАЛОВАТЬ В ВАШ "ShoppingList"</p>
        </div>
      </>
    );
  }
}

export default App;
