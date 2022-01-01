 export function removeItem(item){
    return window.localStorage.removeItem(item);
 }
 export function getItem(item){
     return window.localStorage.getItem(item);
 }
 export function addItem(name,item){
   return  window.localStorage.setItem(name,item);
 }