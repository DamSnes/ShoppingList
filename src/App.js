import React from 'react';
import './App.css';
import './item';

class App extends React.Component {

  state = {
    text: "",
    shoppingList: [],
    newShoppingList: []
  };

  save = () => {
  }


  handleSubmit = () => {
    const { text, shoppingList } = this.state;
    if (text) {
      localStorage.setItem("my_save",text);
      console.log(localStorage, "shoppingList");
      shoppingList.push(text);
      console.log(shoppingList);
      this.setState({shoppingList, text: ""})
      
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  delete = () => {
    const { shoppingList, newShoppingList } = this.state;
    console.log(shoppingList);
    shoppingList.map(index => shoppingList.splice(index, 1));
    this.setState({ newShoppingList })
    console.log(newShoppingList);
    
  };

  render() {
    const { text, shoppingList } = this.state;
  
  return (
    <>
    <div className = "header">
      <div className = "name">
        ShoppingList
      </div>
      <div className="button1">
      <Link className="button-back" to={{ pathname: `/` }}>
            1
      </Link>
      </div>
      <div className="button2">
        2
      </div>
      <div className="button3">
        3
      </div>
    </div>
    <div className = "content">

    <input
          className="input"
          placeholder="Добавьте покупку ..."
          value={text}
          onChange={this.onChange}
    ></input>

    <div className="submitButton" 
      onClick={this.handleSubmit}>
          Добавить
    </div>
    
    
    
    </div>

    <div className = "list">
    
    <ul>{shoppingList.map((index) =>
         
           <div className="content-list">
                     
                 
                <div key={index} className="content-item">{index}
                <div className="content-item-delete" onClick={this.delete}>X</div>
                
               
               
                
            </div>
       </div>
       
        )}</ul>
    </div>
  
    </>

    
  );
  }
}

export default App;
