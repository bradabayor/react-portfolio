import React, { Component } from "react";
import TerminalInput from "./TerminalInput";

const TerminalPrompt = props => (
  <div className="terminal__prompt">
    <p className="terminal__prompt-header">bradabayor@gavin</p>
    <TerminalInput />
    <p className="terminal__input-status">20:31:45</p>
  </div>
);

class Terminal extends Component {
  render() {
    return (
      <section className="terminal">
        <div className="terminal__status-bar" />
        <div className="terminal__window-bar" />
        <div className="terminal__body">
          <TerminalPrompt />
        </div>
      </section>
    );
  }
}

export default Terminal;
