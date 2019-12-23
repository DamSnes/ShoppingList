import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Lists from "./Lists";
import { INITIAL_LISTS } from "./constants/lists";
import List from "./List";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

class Main extends React.Component {
  componentDidMount() {
    const listAcc = INITIAL_LISTS.map((item, index) => {
      item.id = index;
      return item;
    });
    localStorage.setItem("listAcc", JSON.stringify(listAcc));
  }

  render() {
    return (
      <BrowserRouter>
        {/*<Route path="/" component={Header} />*/}
        <Route exact path="/" component={App} />
        <Route path="/shoppingLists" component={Lists} />
        <Route path="/list:id" component={List} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
