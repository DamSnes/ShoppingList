import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Lists extends React.Component {
  constructor(props) {
    super(props);
    // дергаешь локалсторейдж
    // сделать, чтобы у каждого списка был айдишник, который будешь прокидывать в стейт
    // в стейте будет поле id
    // при изменении исходного списка, т.е. items - будем записывать его в локалсторейдж и в стейт
    // чтобы при последующем открытии этой страницы у нас все данные были в ЛС и, соответственно, на странице
    const items = JSON.parse(localStorage.getItem("2d"));
    

    this.state = {
      items: items,
      text: ""
      
    };
  }
  

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  handleSubmit = () => {
    const { text, items } = this.state;
    if (text) {
      items.push(text);
      this.setState({ items, text: "" });
      localStorage.setItem("2d", JSON.stringify(items));
    }
  };

  handleDelete = index => () => {
    const { items } = this.state;
    console.log(index);
    items.splice(index, 1);
    console.log(items);

    this.setState({ items });
    localStorage.setItem("2d", JSON.stringify(items));
  };

  render() {
    const { match, location } = this.props;
    const { props } = location;
    const {
      params: { id }
    } = match;
    const { items, text } = this.state;
    return (
      <>
        <div className="header">
          <div className="name">ShoppingList</div>
          <Link to={{ pathname: `/ShoppingLists` }} className="button1">
            Назад
          </Link>
          <Link to={{ pathname: `/` }} className="button1">
            На главную
          </Link>
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
          />

          <div className="submitButton" onClick={this.handleSubmit}>
            Добавить
          </div>
        </div>

        <div className="list">
        <ul>
            {items.map((item, index) => (
              <div className="content-list" key={index}>
                <div className="content-item">
                  {item}
                  <div
                    className="content-item-delete"
                    onClick={this.handleDelete(index)}
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
  }
}

export default Lists;
