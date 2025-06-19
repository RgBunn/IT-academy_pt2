import {getObjSearchParamsFromCurrentUrl, updateMovieApp, updateSearchParams} from "../utils";

const sortElement=document.querySelector("#sort-by");

sortElement.addEventListener('change',function(e){

    const [sortBy='',sortOrder='']=e.target.value.split("-");
    updateMovieApp({sortBy,sortOrder})
})
 export const updateActiveSort=()=>{
    const {sortBy="",sortOrder=""}=getObjSearchParamsFromCurrentUrl();
    const sortValue=`${sortBy}-${sortOrder}`;
    sortElement.value=sortValue;
 }