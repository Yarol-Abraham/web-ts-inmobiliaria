import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:5000/api/"
});

export function sendSessionIdAuthorization(token: string) 
{
    if(token)
    {
        request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        delete request.defaults.headers.common['Authorization'];
    }
}

export default request;