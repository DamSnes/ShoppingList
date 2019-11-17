import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Lists from "./Lists";
import List from "./List";
import List1 from "./List1";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/*<Route path="/" component={Header} />*/}
        <Route exact path="/" component={App} />
        <Route path="/shoppingLists" component={Lists} />
        <Route path="/list1" component={List} />
        <Route path="/list2" component={List1} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
