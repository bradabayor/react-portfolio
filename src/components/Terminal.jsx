import React, { Component } from "react";
import TerminalPrompt from "./TerminalInput";

import { getTerminalDate } from "./helpers.";

class Terminal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      terminalInputs: 1,
      terminalDates: [getTerminalDate()],
      activePrompt: 0
    };

    this.handleAddPrompt = this.handleAddPrompt.bind(this);
  }

  handleAddPrompt = e => {
    if (e.keyCode === 13) {
      e.preventDefault();

      let dates = [...this.state.terminalDates];
      dates.push(getTerminalDate());

      this.setState({
        terminalInputs: this.state.terminalInputs + 1,
        terminalDates: dates,
        activePrompt: this.state.activePrompt + 1
      });
    }
  };

  render() {
    var terminalPrompts = [];
    for (var i = 0; i < this.state.terminalInputs; i++) {
      terminalPrompts.push(
        <TerminalPrompt
          key={i}
          terminal={i}
          date={this.state.terminalDates[i]}
          isActive={i === this.state.activePrompt ? true : false}
          handleKeyDown={e => this.handleAddPrompt(e)}
        />
      );
    }

    return (
      <section className="terminal">
        <div className="terminal__status-bar" />
        <div className="terminal__window-bar" />
        <div className="terminal__body">{terminalPrompts}</div>
      </section>
    );
  }
}

export default Terminal;
