import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    text: "1",
    shoppingList: [],
  };

  save = () => {
   
    
    // shoppingList_string = JSON.stringify(state);
    
  }


  handleSubmit = () => {
    const { text } = this.state;
    if (text) {
      localStorage.setItem("my_save","1");
      console.log(localStorage, "shoppingList");
      // this.setState({ shoppingList, text: "" });
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  delete = () => {
    const { shoppingList } = this.state;
    console.log(shoppingList);
    shoppingList.map(index => shoppingList.splice(index, 1));
    this.setState({ shoppingList })
    
  }

  render() {
    const { text, shoppingList } = this.state;

  return (
    <>
    <div className = "header">
      <div className = "name">
        ShoppingList
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
                     
                 
                <div className="content-item">{index}
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
