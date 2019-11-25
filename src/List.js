import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Lists extends React.Component {
  constructor(props) {
    super(props);
    const lists = JSON.parse(localStorage.getItem("listAcc"));
    const { id } = this.props.match.params;

    // запишешь не все айтемс, а айтем с нужным id (с помощью .find() найдешь нужный элемент в массиве)
    // прочитать про метод массива .find()
    console.log(id, lists);

    this.state = {
      lists,
      list: this.getList(lists, id),
      text: ""
    };
  }

  getList = (lists, id) => lists.find(item => item.id === +id);

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  handleSubmit = () => {
    const { text, list, lists } = this.state;
    if (text) {
      list.productList.push(text);
      lists.splice(list.id, 1, list);
      this.setState({ lists, list, text: "" });
    }
  };

  handleDelete = index => () => {
    const { items } = this.state;
    console.log(index);
    items.splice(index, 1);
    console.log(items);

    this.setState({ items });
    localStorage.setItem("1st", JSON.stringify(items));
  };

  render() {
    const { match, location } = this.props;
    const { props } = location;
    const {
      params: { id }
    } = match;
    const {
      list: { productList, name },
      text
    } = this.state;

    return (
      <>
        <h3>{name}</h3>
        {productList.map(item => (
          <div>
            <p>{item}</p>
          </div>
        ))}
        {/*<div className="header">*/}
        {/*<div className="name">ShoppingList</div>*/}
        {/*<Link to={{ pathname: `/ShoppingLists` }} className="button1">*/}
        {/*Назад*/}
        {/*</Link>*/}
        {/*<Link to={{ pathname: `/` }} className="button1">*/}
        {/*На главную*/}
        {/*</Link>*/}
        {/*<div className="window">*/}
        {/*<p>{`Вы выбрали список ${id}`}</p>*/}
        {/*<p>{`_Пришли пропсы с customProp = ${*/}
        {/*props ? props.customProp : "не пришел"*/}
        {/*}`}</p>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*<div className="content">*/}
        {/*<input*/}
        {/*className="input"*/}
        {/*placeholder="Добавьте покупку ..."*/}
        {/*value={text}*/}
        {/*onChange={this.onChange}*/}
        {/*/>*/}

        {/*<div className="submitButton" onClick={this.handleSubmit}>*/}
        {/*Добавить*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*<div className="list">*/}
        {/*<ul>*/}
        {/*{items.map((item, index) => (*/}
        {/*<div className="content-list" key={index}>*/}
        {/*<div className="content-item">*/}
        {/*{item}*/}
        {/*<div*/}
        {/*className="content-item-delete"*/}
        {/*onClick={this.handleDelete(index)}*/}
        {/*>*/}
        {/*X*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*))}*/}
        {/*</ul>*/}
        {/*</div>*/}
      </>
    );
  }
}

export default Lists;
