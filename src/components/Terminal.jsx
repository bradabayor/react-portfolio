import React, { Component } from "react";
import TerminalPrompt from "./TerminalPrompt";

import { getTerminalDate } from "./helpers.jsx";
import Response from "./Response";

class Terminal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      terminalPrompts: 1,
      terminalDates: [getTerminalDate()],
      activePrompt: 0,
      terminalResponses: []
    };
  }

  handleAutoFocus = () => {
    this.refs.refs[this.state.activePrompt].focus();
  };

  handleClear = () => {
    this.setState({
      terminalPrompts: 1,
      terminalDates: [getTerminalDate()],
      activePrompt: 0,
      terminalResponses: []
    });
  };

  handleEnter = (e, text) => {
    let dates = [...this.state.terminalDates];
    dates.push(getTerminalDate());

    let responses = [...this.state.terminalResponses];
    responses.push(
      <Response input={text} handleClear={() => this.handleClear()} />
    );

    this.setState({
      terminalPrompts: this.state.terminalPrompts + 1,
      terminalDates: dates,
      activePrompt: this.state.activePrompt + 1,
      terminalResponses: responses
    });
  };

  render() {
    var terminalPrompts = [];
    for (var i = 0; i < this.state.terminalPrompts; i++) {
      terminalPrompts.push(
        <TerminalPrompt
          key={i}
          terminal={i}
          date={this.state.terminalDates[i]}
          isActive={i === this.state.activePrompt ? true : false}
          handleEnter={(e, text) => this.handleEnter(e, text)}
          response={this.state.terminalResponses[i]}
        />
      );
    }

    return (
      <section className="window">
        <div className="window__title terminal-title">BradView</div>
        <div className="window__status terminal-status">
          <p className="window__print">Help</p>
        </div>
        <div className="window__body terminal-body">
          {terminalPrompts ? terminalPrompts : <p>Gimme a sec</p>}
        </div>
      </section>
    );
  }
}

export default Terminal;
