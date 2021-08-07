import {GetCallDate} from "../api/data";

export const FetchData = async()=>{
    let status;
    const response = await GetCallDate().then(resp=>{
        status = resp.status;
        return resp.json();
    }).catch((e)=>{
        status = 401;
    })
    return {status: status, fetchedData: response}
}

