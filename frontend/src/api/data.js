import {geturl,fetchGetObject} from "./config";
export const GetCallDate = async ()=>{
    let url = geturl("phone/randomdata");
    return await fetch(url,fetchGetObject);
}
