// src/index.js
import './styles/main.css';
import "./modals";
import {getMoviesList} from "./api";
import {renderCards} from "./mainContent";
import {getObjParamsFromUrl,MOVIE_EVENT_NAME} from "./utils"
import {renderTotal, updateActiveFilters, updateActiveSort} from "./filters/";
import {updateSearchField} from "./search";
import './addMovie'
import {createPagination} from "./pagination";


 const initApp=()=>{
     updateSearchField();
     updateActiveFilters();
     updateActiveSort();

    const params=getObjParamsFromUrl(window.location.search);
    const page=Number(params.page)||1;
     const moviesPerPage = 20;

    params.limit=20;
    params.skip=(page-1)*moviesPerPage;

    getMoviesList(params).then((data)=>{
        // createPagination(data);
        console.log(data)
        renderCards(data.data);
        renderTotal(data.totalAmount);

    })
}

document.addEventListener("DOMContentLoaded", initApp)
window.addEventListener('popstate',initApp);
window.addEventListener(MOVIE_EVENT_NAME,initApp);
