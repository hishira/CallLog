import React, { useState } from "react";
import styled from "styled-components";
const MINFONTSIE = 1.2;
const MEDIUMFONTSIE = 1.4;
const TextValue = styled.div`
  font-size: ${MINFONTSIE}rem;
  @media (min-width: 350px) {
    font-size: ${MEDIUMFONTSIE}rem;
  }
`;
const Data = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
`;
const OwnerTelephone = styled.div`
  padding: 0.2rem;
  display: flex;
`;
const TelephoneText = styled(TextValue)``;
const TelephoneValue = styled(TextValue)`
  margin-left: 1.4rem;
`;
const UsedData = styled(TextValue)`
  padding: 0.2rem;
`;
const DataLimit = styled(UsedData)``
const DataSpan = styled.span`
  color: ${(props) => (props.limitabuse ? "red" : "inherit")};
`;
const DataUsage = styled.div``;
export default function DataComponent({ ownernumber, datainfo }) {
  return (
    <Data>
      <OwnerTelephone>
        <TelephoneText>Telephone number:</TelephoneText>{" "}
        <TelephoneValue>{ownernumber}</TelephoneValue>
      </OwnerTelephone>
      <DataUsage>
        <UsedData>
          Used data{" "}
          <DataSpan limitabuse={datainfo.limitabuse}>
            {datainfo.useddata}
          </DataSpan>{" "}
           / {datainfo.unit}
        </UsedData>
        <DataLimit>Data limit {datainfo.limit.datatuuse} / {datainfo.limit.unit}</DataLimit>
      </DataUsage>
    </Data>
  );
}
