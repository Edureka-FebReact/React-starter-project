import React from "react";

class Fruit extends React.Component {
  constructor() {
    super();

    this.state = {
      fruitname: "Apple",
      Color: "Red",
      price: "100 RS KG",
    };
  }

  changePrice = () => {
    // event handler
    this.setState({ price: "120 RS KG" });
  };

  render() {
    return (
      <div>
        <h1>this shop sells {this.state.fruitname}</h1>
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
