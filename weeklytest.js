const prompt = require('prompt-sync')();



function threeoutEasy(){

        let points = 0
        let lives = 3
         while(lives > 0){

                let choice = Math.floor(Math.random()*5);
                let num1 = Math.floor(Math.random()*10);
                let num2 = Math.floor(Math.random()*10);

        if(choice == 0){
                let question = Number(prompt(`what is ${num1}+${num2}:  `));
        if(question == num1+num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
        }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
        }}

        else if(choice == 1){
                let question = Number(prompt(`what is ${num1}-${num2}:  `));

        if(question == num1-num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
        }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
        }}}

                         console.log(`Game over! Your score is ${points}`);
        }



        function threeoutMedium(){
        let points = 0
        let lives = 3
        while(lives > 0){

   let choice = Math.floor(Math.random()*5);
                let num1;
                let num2;

        if(choice == 0 || choice == 1){
                    num1 = Math.floor(Math.random()*100);
                    num2 = Math.floor(Math.random()*100);
        }
        else{
                    num1 = Math.floor(Math.random()*100);
                    num2 = Math.floor(Math.random()*10);

        while(num2 == 0){
                                 num2 = Math.floor(Math.random()*10);
            }
        }

        if(choice == 0){
                let question = Number(prompt(`what is ${num1}+${num2}:  `));

        if(question == num1+num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
            }}

        else if(choice == 1){
                let question = Number(prompt(`what is ${num1}-${num2}:  `));

        if(question == num1-num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
            }
        }

        else if(choice == 2){
                 let question = Number(prompt(`what is ${num1}*${num2}:  `));

        if(question == num1*num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
            }
        }

        else if(choice == 3){
                 let question = Number(prompt(`what is ${num1}/${num2}:  `));

        if(question == num1/num2){
                console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                console.log(`incorrect... womp womp, ${lives} lives left`);
            }
        }

        else if(choice == 4){
                let question = Number(prompt(`what is ${num1}%${num2}:  `));

        if(question == num1%num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
            }}}

                         console.log(`Game over! Your score is ${points}`);
}




function threeoutHard(){

        let points = 0
        let lives = 3
        while(lives > 0){

                let choice = Math.floor(Math.random()*5);
                let num1;
                let num2;

        if(choice == 0 || choice == 1){
                    num1 = Math.floor(Math.random()*1000);
                    num2 = Math.floor(Math.random()*1000);
        }
        else{
                    num1 = Math.floor(Math.random()*100);
                    num2 = Math.floor(Math.random()*10);

        while(num2 == 0){
                                 num2 = Math.floor(Math.random()*10);
            }
        }

        if(choice == 0){
                let question = Number(prompt(`what is ${num1}+${num2}:  `));

        if(question == num1+num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
            }
        }

        else if(choice == 1){
                let question = Number(prompt(`what is ${num1}-${num2}:  `));

        if(question == num1-num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
            }
        }

        else if(choice == 2){
                 let question = Number(prompt(`what is ${num1}*${num2}:  `));

        if(question == num1*num2){
                         console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
            }
        }

        else if(choice == 3){
                 let question = Number(prompt(`what is ${num1}/${num2}:  `));

        if(question == num1/num2){
                console.log(`${points} + 10 = ${points + 10} points total`);
                points += 10
            }
        else{
                lives--
                console.log(`incorrect... womp womp, ${lives} lives left`);
            }
        }

        else if(choice == 4){
                let question = Number(prompt(`what is ${num1}%${num2}:  `));

        if(question == num1%num2){
                         console.log(`${points} + 10 = ${points + 10}`);
                points += 10
            }
        else{
                lives--
                         console.log(`incorrect... womp womp, ${lives} lives left`);
            }}}

                         console.log(`Game over! Your score is ${points}`);
}



function maxscoreEasy(){

    let points = 0

    for(let i = 1; i <= 20; i++){

        let choice = Math.floor(Math.random()*2);
        let num1 = Math.floor(Math.random()*10);
        let num2 = Math.floor(Math.random()*10);

        if(choice == 0){

                 let question = prompt(`${i}) ${num1}+${num2} = ? `);

                 if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1+num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 1){

                 let question = prompt(`${i}) ${num1}-${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1-num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }}}

    console.log(`Game over! Your score is ${points}`);
}



function maxscoreMedium(){

    let points = 0

    for(let i = 1; i <= 20; i++){

                let choice = Math.floor(Math.random()*5);
                let num1;
                let num2;

        if(choice == 0 || choice == 1){
                                 num1 = Math.floor(Math.random()*100);
                                 num2 = Math.floor(Math.random()*100);
        }
        else{
                                 num1 = Math.floor(Math.random()*10);
                                 num2 = Math.floor(Math.random()*10);

        while(num2 == 0){
                                 num2 = Math.floor(Math.random()*10);
            }
        }

        if(choice == 0){

                 let question = prompt(`${i}) ${num1}+${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1+num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 1){

                 let question = prompt(`${i}) ${num1}-${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1-num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 2){

                 let question = prompt(`${i}) ${num1}*${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1*num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 3){

                 let question = prompt(`${i}) ${num1}/${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1/num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

            else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 4){

                 let question = prompt(`${i}) ${num1}%${num2} = ? `);
 
            if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1%num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
        }}}

    console.log(`Game over! Your score is ${points}`);
}



function maxscoreHard(){

    let points = 0

    for(let i = 1; i <= 20; i++){

                let choice = Math.floor(Math.random()*5);
                let num1;
                let num2;

        if(choice == 0 || choice == 1){
                                 num1 = Math.floor(Math.random()*1000);
                                 num2 = Math.floor(Math.random()*1000);
        }
        else{
                                 num1 = Math.floor(Math.random()*100);
                                 num2 = Math.floor(Math.random()*10);

            while(num2 == 0){
                                 num2 = Math.floor(Math.random()*10);
            }
        }

        if(choice == 0){

                 let question = prompt(`${i}) ${num1}+${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(` Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1+num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 1){

                 let question = prompt(`${i}) ${num1}-${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1-num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 2){

                 let question = prompt(`${i}) ${num1}*${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1*num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 3){

                 let question = prompt(`${i}) ${num1}/${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
            }

        else if(Number(question) == num1/num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
            }

        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
            }
        }

        else if(choice == 4){

                 let question = prompt(`${i}) ${num1}%${num2} = ? `);

        if(question.toLowerCase() == "skip"){
                         console.log(`Okay, Your score: ${points} + 0 = ${points}`);
        }

        else if(Number(question) == num1%num2){
                         console.log(`Correct! Your score: ${points} + 10 = ${points + 10}`);
                points += 10
        }
        else{
                         console.log(`Wrong! Your score: ${points} - 5 = ${points - 5}`);
                points -= 5
        }}}
                         console.log(`Game over! Your score is ${points}`);
        }


//prompt / menu
        
let mode;
let three;
let Normal;

while(mode!==3){
    console.log("Helloo, welcome to the cool math game")
    console.log(`Enter 1 for Three-Out Mode`)
    console.log(`Enter 2 for Max Mode`)
    console.log(`Enter 3 to Quit`)

    mode=Number(prompt("Choose Your Mode: "))

    if(mode===1){
        while(three!==4){
            console.log(`Difficulty`)
            console.log(`Enter 1 for Easy`)
            console.log(`Enter 2 for Medium `)
            console.log(`Enter 3 for Hard`)
            console.log(`Enter 4 to Quit`)

            three=Number(prompt("Choose Difficulty: "))

        if(three===1){
            threeoutEasy()

        }
        
        if(three===2){
            threeoutMedium()


        }

        if(three===3){
            threeoutHard()

        }

        if(three===4){
            console.log("Goodbye!")
            break;
        }
        }
    }
    if(mode===2){
        while(Normal!==4){
            console.log(`Difficulty`)
            console.log(`Enter 1 for Easy`)
            console.log(`Enter 2 for Medium `)
            console.log(`Enter 3 for Hard`)
            console.log(`Enter 4 to Quit`)

            Normal=Number(prompt("Choose Difficulty: "))

        if(Normal===1){
            maxscoreEasy()
        }
        
        if(Normal===2){
            maxscoreMedium()
        }

        if(Normal===3){
            maxscoreHard()

        }

        if(Normal===4){
            console.log("Goodbye!")
            break;
        }
        }
    }
    if(mode===3){
        console.log("GoodBye!")
        break;
    }
}