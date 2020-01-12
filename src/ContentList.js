import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { changeText: props.product.name, ...props.product };
  }

  editName = event => {
    this.setState({ changeText: event.target.value });
  };

  handleDeleteItem = index => () => {
    const { handleDelete } = this.props;

  };

  saveChanges = () => {
    const { handleSave } = this.props;
    const { isEditing, done, changeText } = this.state;
    this.setState({
      isEditing: false,
      name: this.state.changeText
    });
    handleSave({ name: changeText, done, isEditing: false });
  };

  render() {
    const { name, done, isEditing, changeText, handleDeleteItem, index, markDone } = this.state;
    return (
      <>
      <div className="content">
      <div className="content-list">
      <div className="content-item">
      <div>
        {isEditing ? (
          <>
            <input onChange={this.editName} value={changeText} />
            <button className="content-item-done" onClick={this.saveChanges}>Сохранить</button>
          </>
        ) : (
          <>
            <p onClick={markDone} className={done && "done"}>
              {name}
            </p>
            <p>Название: {name}</p>
            <div className="content-item-done"
              onClick={() => {
                this.setState({ isEditing: true });
              }}
            >
              Изменить
            </div>
            <div className="content-item-delete" onClick={this.handleDeleteItem}>
            X
            </div>

            
          </>
        )}

        {name} {"" + done} {"" + isEditing}
      </div>
      </div>
      </div>
      </div>
      
    </>
    );
  }
}
// done ? "done" : "" зачёркивание
export default Product;
