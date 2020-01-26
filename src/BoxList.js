import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from 'uuid/v4';

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
    // const items = {...item, id: uuid()}
    this.setState(prevValue => {
      return {
        boxes: [...this.state.boxes, item]
    }
    })
  }

  removeBox(evt){
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== evt.target.value)
    })
  }

  render() {
    const boxes = this.state.boxes.map(box => {
      return (
        <Box
          key={uuid()}
          width={box.width}
          height={box.height}
          color={box.color}
          removeBox={this.removeBox}
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
