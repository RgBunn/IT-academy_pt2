// import SVG from "@Public/assets/test.svg";
//
// console.log(SVG)

// type Movie= {
//     title: string;
//     id:MovieID;
//     rating?: number;
// };
// type MovieOld= {
//     title: string;
//     id:MovieID;
//     genre: string[];
// };
// type MovieID=string | number;
// // type MovieID=unknown;
//
// // const convertMovie=(movie:MovieID):MovieID=>{
// //    // if(typeof movie=="string")
// //    //  if(movie instanceof Object)Object.keys(movie)
// //
// //  if(typeof movie==='string')return "test";
// //  if(typeof movie==='number')return "1";
// //  else return undefined;
// // }
// const convertMovie=(movie:Movie|MovieOld):void=>{
//    // if("genre" in movie)console.log(movie.genre);
//     const localMovie:MovieOld=movie;
// }
// convertMovie({
//     title:"test",
//     id:1,
//     genre: ["test"],
// })
////////////////////////////
// type MovieID=string | number;
//  type Movie= {
//      title: string;
//      id:MovieID;
//     rating?: number;
// };
// // type RequiredMovie= Movie;
// type ConvertMovie=(movie:Movie)=>Movie
//  const convertMovie: ConvertMovie=(movie:Movie)=>{
// return movie;
//  }
// convertMovie({
//     title:"test",
//     id:1,
//
// })
type Calc=(a:number, b:number)=>number;
export const calc(a,b)=>{
    return a + b;
};