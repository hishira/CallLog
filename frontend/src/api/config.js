const geturl = (url)=>{
    return `http://localhost:9000/${url}`
}
const fetchGetObject = {
    mode: "cors",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    method: "GET"
}

export {geturl, fetchGetObject}