import React, { Component } from "react";

class TerminalPrompt extends Component {
  componentDidMount() {
    if (this.props.isActive) {
      this.textInput.focus();
    }
  }

  handleEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.handleEnter(e, this.textInput.innerHTML);
    }
  };

  render() {
    const response = this.props.response ? (
      <div className="terminal__response">{this.props.response}</div>
    ) : null;

    return (
      <div className="terminal__prompt">
        <p className="terminal__prompt-header">bradabayor@gavin:~$</p>
        <span
          contentEditable={this.props.isActive ? true : false}
          spellCheck="false"
          className={
            "terminal__input " + (this.props.isActive ? "active" : "locked")
          }
          type="text"
          onKeyDown={this.handleEnter}
          ref={input => {
            this.textInput = input;
          }}
        />
        <p className="terminal__input-status">{this.props.date}</p>
        <br />
        {response}
      </div>
    );
  }
}

export default TerminalPrompt;
