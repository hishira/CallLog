import React, { useEffect,useState } from "react";
import { FetchData } from "../utils/datafetch";
export default function MainComponent(){
    const [fetchedCall,setFetchedCall] = useState({})
  const getdata = async () => {
    let data = await FetchData();
    setFetchedCall(data.fetchedData);
  };
  useEffect(() => {
    getdata();
  }, []);
  return <div className="App">{JSON.stringify(fetchedCall)}</div>;
}
