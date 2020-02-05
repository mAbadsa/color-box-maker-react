import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(item) {
    this.setState(prevValue => {
      return {
        boxes: [...this.state.boxes, item]
    }
    })
  }

  removeBox(id){
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  render() {
    const boxes = this.state.boxes.map(box => {
      return (
        <Box
          key={box.id}
          width={box.width}
          height={box.height}
          color={box.color}
          removeBox={() => this.removeBox(box.id)}
        />
      );
    });
    return (
      <div>
        <h1>Color Box Maker Thingy</h1>
        <NewBoxForm addBox={this.addBox}/>
        {boxes}
      </div>
    );
  }
}

export default BoxList;
