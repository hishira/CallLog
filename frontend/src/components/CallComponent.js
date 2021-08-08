import React from "react";
import styled from "styled-components";
import InComeCallsComponent from "./InComeCallsComponent";
const Calls = styled.article`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px){
    flex-direction: row;
    
  }
`;
export default function CallComponent({ incomecall, outcomecall }) {
  return (
    <Calls>
      <InComeCallsComponent calls={incomecall} infoString="From" titleText="Incoming calls"/>
      <InComeCallsComponent calls={outcomecall} infoString="To" titleText="Outgoing calls"/>

    </Calls>
  );
}
