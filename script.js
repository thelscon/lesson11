'use strict' ;

let str = '17/01/1994' ;
const arr = str.split ('/') ;
console.log (arr) ;
let newNum = [] ;

for (let key = 0 ; key < arr.length; ++key) {
    newNum [key] = Number (arr[key]) ;
}

console.log (newNum) ;

const n = 5 ;

const fac = n => ( n <= 1 ) ? 1 : fac (n-1) * n ;
const variants = (n, m) => fac (n) / fac (n - m) ;

console.log (variants (10, 3)) ;

const calcFac = () => {
    console.log (fac (999)) ;
} ;

const timeLog = (cb) => {
    console.time ('fnc') ;
    cb () ;
    console.timeLog ('fnc') ;
} ;

const arrOfTasks = [
    () => {
        console.log ('hello 1') ;
    } ,
    () => {
        console.log ('hello 2') ;
    } ,
] ;

for ( let key = 0; key < arrOfTasks.length ; ++key) {
    //arrOfTasks [key] () ;
    timeLog (arrOfTasks [key]) ;
}

timeLog ( calcFac ) ;