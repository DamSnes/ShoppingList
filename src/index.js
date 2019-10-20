import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";

class Main extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Route exact path="/" component={App} />
  
        </BrowserRouter>
      );
    }
  }

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
