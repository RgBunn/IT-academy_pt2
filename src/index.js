// index.js
import "./styles/main.css"
import {tetrisGrid,gridCells,
        miniGridContainer,miniGridCells,
        createGameGrid, createPreviewGrid} from "./grid"
import {Tetromino,getRandomTetromino} from "./tetromino";
import { spawnNewTetromino } from "./game-logic";
import "./controls.js";
import "./leaderboard.js";


createGameGrid();
createPreviewGrid();
// getRandomTetromino();
spawnNewTetromino();

/////////////////////////








