import React, { Component } from "react";
import uuid from "uuid/v4";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "", id: uuid() };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      height: "",
      width: "",
      color: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            type="number"
            id="height"
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
          />
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input
            type="number"
            id="width"
            name="width"
            onChange={this.handleChange}
            value={this.state.width}
          />
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <input
            type="text"
            id="color"
            name="color"
            onChange={this.handleChange}
            value={this.state.color}
          />
        </div>
        <button>Add New Box</button>
      </form>
    );
  }
}
export default NewBoxForm;
