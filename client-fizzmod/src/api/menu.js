import { url } from './config'
/*import dotenv from 'dotenv';
dotenv.config();*/
//consumir api
export function getMenuApi(){
    const URL = `${url}/menu.json`;
    
    return fetch(URL).then(response=>{
        return response.json();
    }).then(result=>{
        return result;
    }).catch(error=>{
        return error;
    });
}