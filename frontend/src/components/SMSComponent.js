import React from "react";
import styled from "styled-components";
import SMSComp from "./SMSComp";
const SMS = styled.article`
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
export default function SMSComponent({ incomesms, outcomesms }) {
  return (
    <SMS>
      <SMSComp allsms={incomesms} titleText="Incoming sms" infoString="From" />
      <SMSComp allsms={outcomesms} titleText="Outgoing sms" infoString="To" />
    </SMS>
  );
}
