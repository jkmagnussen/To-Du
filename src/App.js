import React, { Component } from "react";
import Footer from "./Footer.js";
import bin from "./bin.png";
import work from "./work.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }
  updateInput(key, value) {
    //Update React state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    //create item with distinct ID
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //List copy
    const list = [...this.state.list];

    //Add new item
    if (newItem.value.length > 0) {
      list.push(newItem);
    }

    //update state with added list and reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    //Copy current list of items
    const list = [...this.state.list];

    //Filter items being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  handleSubmit() {}

  render() {
    return (
      <div className="App">
        <div className="title">ToDu</div>
        <br />
        <input
          type="text"
          placeholder=" What would you like to add?"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
        />
        <br />
        <button className="add" onClick={handleSubmit => this.addItem()}>
          Add
        </button>
        <br />
        <ul>
          {this.state.list.map(item => {
            return (
              <div className="inlineLi" key={item.id}>
                <li key={item.id}>
                  {item.value}
                  <button
                    className="x"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    <img
                      className="bin"
                      src={bin}
                      alt="bin"
                      style={{
                        width: 68,
                        height: 48
                      }}
                    />
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
        <img className="work" src={work} alt="work" />
        <Footer />`
      </div>
    );
  }
}

export default App;
