console.log('HELLO LILLIA');

const { readdirSync } = require('fs');

// javascript object destruction 

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

console.log(getDirectories('./'));


// DZ: difference between arrow function and regular

    // C:\Users\LILIYA\react-app-submodule\my-app\nashas_programa.js

    const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}


// const ans = await askQuestion("Are you sure you want to deploy to PRODUCTION? ");

//dz primitive data types are

const x = 121234

const human =  {
   x: x,
   run: function(source) {
    console.log('')
  }
}



function game() {

    const GAME_NAME = 'Best game';

    function human(name, position = 0) {

        const width = 50; //kg

        const name1 = 'LALA' + GAME_NAME;
    
        function walk(steps, height = 160, distance = 1.2) {
            const result = steps * (height/3) * distance;
    
            return result;
        }
    
        // Math.random()
        const position = walk(10);
    }
    
    human()
}

game(human(create()))
