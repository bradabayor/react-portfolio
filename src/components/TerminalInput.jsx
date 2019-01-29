import React, { Component } from "react";

import { getTerminalDate } from "./helpers.";

class TerminalPrompt extends Component {
  componentDidMount() {
    if (this.props.isActive) {
      this.textInput.focus();
    }
  }
  render() {
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
          onKeyDown={this.props.handleKeyDown}
          ref={input => {
            this.textInput = input;
          }}
        />
        <p className="terminal__input-status">{this.props.date}</p>
      </div>
    );
  }
}

export default TerminalPrompt;
