import React, { useState, useEffect } from "react";
import {
  Calls,
  Text,
  CallsWrapper,
  CallComponent,
  InfoCompo,
  SortWrapper,
  SortLabel,
  SortSelect,
  SortOption,
} from "./SharedCSSComponents";
import {
  SortAscByDate,
  SortDescByDate,
  SortByTimeAsc,
  SortByTimeDesc,
} from "../utils/sort";

const InComeComponent = ({ call }) => {
  return (
    <CallComponent>
      <div>
        {call.numberwhichcall ? call.numberwhichcall : call.numbertocall}
      </div>
      <div>{call.time}</div>
      <div>{call.date}</div>
    </CallComponent>
  );
};
export default function InComeCallsComponent({ calls, infoString, titleText }) {
  const [income, setcalls] = useState(calls);

  const sortBy = (sorttype) => {
    if (sorttype === "1") {
      setcalls([...income.sort(SortAscByDate)]);
    } else if (sorttype === "2") {
      setcalls([...income.sort(SortDescByDate)]);
    } else if (sorttype === "3") {
      setcalls([...income.sort(SortByTimeAsc)]);
    } else {
      setcalls([...income.sort(SortByTimeDesc)]);
    }
  };
  const selecehandle = (e) => {
    sortBy(e.target.value);
  };
  return (
    <Calls>
      <Text>{titleText}</Text>
      <SortWrapper>
        <SortLabel>Sort by</SortLabel>
        <SortSelect onChange={selecehandle}>
          <SortOption value={1}>By date asc</SortOption>
          <SortOption value={2}>By date desc</SortOption>
          <SortOption value={3}>By time asc</SortOption>
          <SortOption value={4}>By time desc</SortOption>
        </SortSelect>
      </SortWrapper>
      <CallsWrapper>
        <InfoCompo>
          <div>{infoString}</div>
          <div>Time</div>
          <div>Date</div>
        </InfoCompo>
        {income.length > 0
          ? income.map((incomeinfo) => (
              <InComeComponent
                key={
                  incomeinfo.numberwhichcall
                    ? incomeinfo.numberwhichcall
                    : incomeinfo.numbertocall
                }
                call={incomeinfo}
              />
            ))
          : null}
      </CallsWrapper>
    </Calls>
  );
}
