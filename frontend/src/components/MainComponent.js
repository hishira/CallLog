import React, { useEffect, useState } from "react";
import { FetchData } from "../utils/datafetch";
import styled from "styled-components";
import DataComponent from "./DataComponent";
import CallComponent from "./CallComponent";
import SMSComponent from "./SMSComponent";
const Main = styled.main`
  margin: 0;
`;
const Spinner = styled.div`
  position: absolute;
  z-index: 100;
  width: 2rem;
  height: 2rem;
  left: 50%;
  top: 5rem;
  border-radius: 50%;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  animation: 1.5s rotate ease-in-out infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const MainWrapper = styled.div``;
export default function MainComponent() {
  const [fetchedCall, setFetchedCall] = useState({});
  const [loading, setloading] = useState("true");
  const getdata = async () => {
    setloading("true");
    let data = await FetchData();
    setFetchedCall(data.fetchedData);
    console.log(data.fetchedData);
    setloading("false");
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <Main>
      {loading === "true" ? (
        <Spinner />
      ) : (
        <MainWrapper>
          <DataComponent
            ownernumber={fetchedCall.ownernumber}
            datainfo={fetchedCall.datausage}
          />
          <CallComponent
            incomecall={fetchedCall.incomecall}
            outcomecall={fetchedCall.outgoingcall}
          />
          <SMSComponent
            incomesms={fetchedCall.smsfrom}
            outcomesms={fetchedCall.smsto}
          />
        </MainWrapper>
      )}
    </Main>
  );
}
