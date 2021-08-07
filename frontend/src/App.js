import React, { useEffect } from "react";
import { FetchData } from "./utils/datafetch";
function App() {
  const getdata = async () => {
    let data = await FetchData();
    console.log(data.fetchedData);
  };
  useEffect(() => {
    getdata();
  }, []);
  return <div className="App"></div>;
}

export default App;
