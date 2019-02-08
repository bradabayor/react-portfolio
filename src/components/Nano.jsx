import React, { Component } from "react";

import styled from "styled-components";

const PrintButton = styled.span`
  display: table-cell;
  color: red;
`;

const Line = styled.span`
  display: block;
  margin: 0;
`;

class Nano extends Component {
  render() {
    return (
      <section className="window">
        <div className="window__title nano-title">BradVision</div>
        <div className="window__status nano-status">
          <PrintButton>PrinterFriendly</PrintButton>
        </div>
        <div className="window__body nano-body">
          <Help />
        </div>
      </section>
    );
  }
}

const Help = () => (
  <div className="help">
    <Line>{`{`}</Line>
    <Line style={{ marginLeft: "20px" }}>{`languages: [`}</Line>
    <Line style={{ marginLeft: "40px" }}>{`{`}</Line>
    <Line style={{ marginLeft: "60px" }}>{`name: javascript,`}</Line>
    {/* Projects */}
    <Line style={{ marginLeft: "60px" }}>{`projects: [`}</Line>
    <Line style={{ marginLeft: "80px" }}>{`{`}</Line>
    <Line
      style={{ marginLeft: "100px" }}
    >{`project: "fantasy_football",`}</Line>
    <Line
      style={{ marginLeft: "100px" }}
    >{`description: "multiplayer online sports management gaming platform",`}</Line>
    <Line style={{ marginLeft: "100px" }}>{`project: fantasy_football,`}</Line>
    <Line style={{ marginLeft: "80px" }}>{`},`}</Line>
    <Line style={{ marginLeft: "80px" }}>{`{`}</Line>
    <Line style={{ marginLeft: "100px" }}>{`project: "portfolio",`}</Line>
    <Line
      style={{ marginLeft: "100px" }}
    >{`description: "personal online webpage",`}</Line>
    <Line style={{ marginLeft: "100px" }}>{`project: fantasy_football,`}</Line>
    <Line style={{ marginLeft: "80px" }}>{`}`}</Line>
  </div>
);

export default Nano;
