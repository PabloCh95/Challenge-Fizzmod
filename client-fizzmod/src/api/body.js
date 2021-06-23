import { url } from './config';

export function getBodyApi(){
    const URL = `${url}/body.json`

    return fetch(URL).then(response=>{
        return response.json();
    }).then(result=>{
        return result;
    }).catch(error=>{
        return error;
    });
}