import {showAddMovieModal} from "../modals";
import {createMovie} from "../api";
import {logPlugin} from "@babel/preset-env/lib/debug";

const addMovieBtn=document.querySelector('#add-movie-btn');

addMovieBtn.addEventListener('click', (e) => {
    showAddMovieModal();
    createMovie();

})