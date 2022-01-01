import axios from "axios";
import jwtDecode from "jwt-decode";
import { getItem,addItem,removeItem } from "./LocalStorage";

export function hasAuthenticated(){
    const token=getItem("guideTravelToken");
    const result =token?tokenIsValid(token) : false;
    if(result===false){
        removeItem('guideTravelToken');
    }
    // return result;
    return true;
}


export function login(user){
    return axios
        .post("url",user)
        .then(resp=>resp.data.token)
        .then(token=>{
            addItem('guideTravelToken',token);
            return true;
        })
}




export function logOut(){
    removeItem("guideTravelToken");
}


function tokenIsValid(token){
    const {exp}=jwtDecode(token);
    if(exp*1000 > new Date().getTime()){
        return true;
    }
    return false;
}