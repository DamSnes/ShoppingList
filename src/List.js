import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ContentList from "./ContentList";

class Lists extends React.Component {
  constructor(props) {
    super(props);
    const lists = JSON.parse(localStorage.getItem("listAcc"));
    const { id } = this.props.match.params;

  
    console.log(id, lists);

    this.state = {
      lists,
      list: this.getList(lists, id),
      text: "",
      changeableText: "",
      changeText: ""
    
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
      list.productList.push({ name: text, done: false, isEditing: false });
      lists.splice(list.id, 1, list);
      this.setState({ lists, list, text: "" });
      localStorage.setItem("listAcc", JSON.stringify(lists));
    }
  };

  handleDone = index => () => {
    const {
      list: { productList },
      list,
      lists
    } = this.state;
    const product = productList[index];
    product.isEditing = !product.isEditing;
    productList.splice(index, 1, product);
    this.setState({ list: { ...list, productList }, product, text: "" });
    localStorage.setItem("listAcc", JSON.stringify(lists));
  };

  handleSave = index => () => {
    const {
      list: { productList },
      list,
      changeableText,
      lists
    } = this.state;
    const product = productList[index];
    product.name = changeableText;
    product.isEditing = false;
    productList.splice(index, 1, product);
    this.setState({ list: { ...list, productList }, product, text: "" });
    localStorage.setItem("listAcc", JSON.stringify(lists));
  };

  handleDelete = index => () => {
    const { list, lists } = this.state;
    console.log(list, "list");
    list.productList.splice(index, 1);
    lists.splice(list.id, 1, list);
    this.setState({ lists, list });
    localStorage.setItem("listAcc", JSON.stringify(lists));
  };

  render() {
    const { match, location } = this.props;
    const { props } = location;
    const {
      params: { id }
    } = match;
    const {
      list: { productList, name },
      text,
      changeableText
    } = this.state;
    console.log(productList, "productList");
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
          {/* <div className="window">
            <p>{`Вы выбрали список ${id}`}</p>
            <p>{`_Пришли пропсы с customProp = ${
              props ? props.customProp : "не пришел"
            }`}</p>
          </div> */}
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
            {productList.map((product, index) => (
              <ContentList
                index={index}
                key={index}
                handleDone={this.handleDone}
                handleSave={this.handleSave}
                handleDelete={this.handleDelete}
                product={product}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Lists;
