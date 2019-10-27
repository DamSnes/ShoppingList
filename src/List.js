import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


constructor(props) {
  super(props);

  this.state = {
    text: "",
    shoppingList: [],
    newShoppingList: []
  };
}

const Lists = ({ match, location }) => {
  const { props } = location;
  const {
    params: { id }
  } = match;
  
  
  

  return (
    <>
      <div className="header">
      <div className="name">ShoppingList</div>
      <Link to={{ pathname: `/ShoppingLists` }} className="button1">Назад</Link>
      <Link to={{ pathname: `/` }} className="button1">На главную</Link>
      <div className="window">
      <p>{`Вы выбрали список ${id}`}</p>
      <p>{`_Пришли пропсы с customProp = ${
        props ? props.customProp : "не пришел"
      }`}</p>
      </div>
      </div>

      <div className="content">
          <input
            className="input"
            placeholder="Добавьте покупку ..."
            value={text}
            onChange={this.onChange}
          ></input>

          <div className="submitButton" onClick={this.handleSubmit}>
            Добавить
          </div>
        </div>

        <div className="list">
          <ul>
            {shoppingList.map((item, index) => (
              <div className="content-list">
                <div key={index} className="content-item">
                  {item}
                  <div
                    className="content-item-delete"
                    onClick={this.delete(index)}
                  >
                    X
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      
    </>
  );
};

export default Lists;
