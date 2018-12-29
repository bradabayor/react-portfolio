import React, { Component } from 'react';
import '../index.css'

class Pixel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };
  };


  render() {
    const style = {
      backgroundColor : this.state.hovered ? "yellow" : "#ff4336",
      opacity : this.state.hovered ? "0" : "1"
    };

    const handleMouseEnter = () => { 
      this.setState({hovered : true });
    };

    return (
      <div
        className="pixel"
        style={style}
        onMouseEnter={handleMouseEnter}
      ></div>
    )
  }

}

export default Pixel;