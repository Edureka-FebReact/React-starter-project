import React from "react";
import './fruit.css'

class Fruit extends React.Component {
  constructor() {
    super();

    this.state = {
      fruitname: "Apple",
      Color: "Red",
      price: "100 RS KG",
    };
  }

  shouldComponentUpdate() {
      return false;
  }



  changePrice = () => {
    // event handler
    this.setState({ price: "120 RS KG" });
    alert("the price has been updated to 120 rs kg ")
  };

  render() {
    return (
      <div>
        <h1 >this shop sells {this.state.fruitname} </h1>
        <p>
          it is {this.state.Color} in color and it is {this.state.price}
        </p>

        <button type="button" onClick={this.changePrice}>
          update the price
        </button>
      </div>
    );
  }
}
export default Fruit;
