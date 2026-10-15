const prompt = require('prompt-sync')();




let i = 0;
let choice;
let array = [];
while(choice !== 6) {
console.log("student grade manager");
console.log("1. Add a grade");
console.log("2. Calculate average");
console.log("3. Find Avg. grade");
console.log("4. Print all grades");
console.log("5. Max")
console.log("6. Exit");


 let n = Number(prompt("hello! please enter your choice: "));

    if(n < 1 || n > 6) {
        console.log("invalid choice... please enter a number between 1 and 6");
    }

    while(n === 1) {
        let grade = prompt("Enter the grade to add, or type done to finish adding grades: ");
        if(grade === 'done'){
            break;
        }

        else{
        array.push(grade);
        console.log("grade added");
        console.log(array);
        }
    }

    while(n === 2) {
        console.log(array);
        let removegrade = prompt("enter the grade to remove or type done to finish removing grades: ");
        let index = array.indexOf(removegrade);
        if(index !== -1) {
            array.splice(index, 1);
            console.log("grade has been removed");
        } 
        
        else {
            console.log("that grade does not exist");
            break;
        }
    }

    while(n === 3) {
        array.forEach((grade, index) => {
            console.log(`Grade ${index + 1}: ${grade}`);
        })
        if(array.length === 0) {
            console.log("no grades available");
        }
        break;
    }

    while(n === 4) {
        if(array.length === 0) {
            console.log("no grades available");
        }
        
        else {
            let sum =  0
            for(let i = 0; i < array.length; i++) {
                sum += Number(array[i]);
            }
            let average = sum / array.length;
            console.log(`average grade is : ${average}`);
            break;
        }
    }

    while(n === 5) {
        if(array.length === 0) {
            console.log("no grades available");
        } 

        else {
            let highestGrade = Math.max(...array);
            console.log(`highest Grade is : ${highestGrade}`);
            break;
        }
    }

    if(n === 6) {
        console.log("exiting, goodbye!");
          break;
    }
}












// function UpperCase(str){
//     let result= "";
//     for(let k=0; k<str.length; k++){
//         const charCode = str.charCodeAt(k);
//         if(charCode>= 97 && charCode<= 122){
//             result+= String.fromCharCode(charCode-32)
//         }

//         else{
//             result += str[k]
//         }
//     }
//     return result;
// }




// let i = 0;
// let array = [] ;
// let n ;
// while(n!==6){


    
//     console.log("Movie Collection Manager");
    
// console.log("1. add a movie");
// console.log("2. remove a movie");
// console.log("3. search for a movie");
// console.log("4. print all movies");
// console.log("5. count movies")
// console.log("6. display movie in uppercase");
// console.log("7. exit")



//     let n = Number(prompt("enter your choice: "));

//     if(n < 1 || n > 7) {
//         console.log("invalid choice, please enter a number between 1 and 7");
//     }

//     while(n === 1) {
//         let movie = prompt("enter the movie title or type stop to finish adding movies: ");
//         if(movie === 'stop'){
//             break;
//         }

//         else{
//         array.push(movie);
//         console.log("movie added");
//         console.log(array);
//         }
//     }

//     while(n === 2) {
//         console.log(array);
//         let removemovie = prompt("enter the movie title to remove or type stop to finish removing movies: ");
//         let index = array.indexOf(removemovie);
//         if(index !== -1) {
//             array.splice(index, 1);
//             console.log("movie removed");
//         }
//          else {
//             console.log("that movie doesnt exist");
//             break;
//         }
//     }

//     while(n === 3) {
//         array.forEach((movie, index) => {
//             console.log(`Movie ${index + 1}: ${movie}`);
//         })
//         if(array.length === 0) {
//             console.log("there are no movies available");
//         }
//         break;
//     }

//     while(n === 4) {
//         if(array.length === 0) {
//             console.log("there are no movies available.");
//         } 
//         else {
//             let movies = 0
//             for(i = 0; i < array.length; i++)
//             console.log(array[i])
//              }
//              break;
//         }

//     while(n === 5) {
//         if(array.length === 0) {
//             console.log("No movies available.");
//         }
//          else {
//             console.log(array.length);
//             break;
//         };
//     }

//     if(n === 6) {
//        console.log("Movies in UpperCase:");
//         array.forEach((movie) =>
//             console.log(UpperCase(movie)));
//         break;
//     }

//     if(n === 7) {
//         break;
// }
// }