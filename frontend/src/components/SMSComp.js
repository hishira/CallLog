import React, { useState } from "react";
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
import { SortAscByDate, SortDescByDate } from "../utils/sort";

const SMSInfoComponent = ({ sms }) => {
  return (
    <CallComponent>
      <div>{sms.to ? sms.to : sms.from}</div>
      <div>{sms.date}</div>
    </CallComponent>
  );
};
export default function SMSComp({ allsms, infoString, titleText }) {
  const [smss, setsms] = useState(allsms);

  const sortBy = (sorttype) => {
    if (sorttype === "1") {
      setsms([...smss.sort(SortAscByDate)]);
    } else if (sorttype === "2") {
      setsms([...smss.sort(SortDescByDate)]);
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
          <SortOption value={1}>
            By date ascending
          </SortOption>
          <SortOption value={2}>By date descending</SortOption>
        </SortSelect>
      </SortWrapper>
      <CallsWrapper>
        <InfoCompo>
          <div>{infoString}</div>
          <div>Date</div>
        </InfoCompo>
        {smss.length > 0
          ? smss.map((sms) => (
              <SMSInfoComponent
                key={`${sms.date}${sms.to ? sms.to : sms.from}${Math.random()}`}
                sms={sms}
              />
            ))
          : null}
      </CallsWrapper>
    </Calls>
  );
}
