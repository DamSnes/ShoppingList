import React, { Component } from "react";
import "./index.css";

class ContentList extends Component {
  constructor(props) {
    super(props);
    const { product } = props;
    this.state = { product, changeText: ""};
    const lists = JSON.parse(localStorage.getItem("listAcc"));
  }

  markDone = () => {
    const { product } = this.state;
    product.done = !product.done;
    this.setState({ product });
  };

  // handleDone = index => () => {
  //   const {
  //     list: { productList },
  //     list,
  //     lists
  //   } = this.state;
  //   const product = productList[index];
  //   product.isEditing = !product.isEditing;
  //   productList.splice(index, 1, product);
  //   this.setState({ list: { ...list, productList }, product, changeText: "", text: "" });
  //   localStorage.setItem("listAcc", JSON.stringify(lists));

  handleSave1 = index => () => {
    
    const {changeText} = this.setState;
    this.setState({ changeText: ""});
    // localStorage.setItem("listAcc", JSON.stringify(lists));
  };
  
  onProductChange = event => {
    const { value } = event.target;
    this.setState({ changeText: value });
  };
  render() {
    const {
      product: { isEditing, name, done },
      changeText
    } = this.state;
    const { handleDone, handleSave, handleDelete, index } = this.props;
    console.log(index, "name");
    return (
      <div className="content-list">
        <div className="content-item">
          {isEditing ? (
            <input
              className="input"
              placeholder=""
              value={changeText}
              onChange={this.onProductChange}
            />
          ) : (
            <p onClick={this.markDone} className={done && "done"}>
              {name}
            </p>
          )}
          <div className="content-item-delete" onClick={handleDelete(index)}>
            X
          </div>
          <div
            className="content-item-done"
            onClick={isEditing ? handleSave(index) : handleDone(index)}
          >
            Edit
          </div>
        </div>
      </div>
    );
  }
}

export default ContentList;
