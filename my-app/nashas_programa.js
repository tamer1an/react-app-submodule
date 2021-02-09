console.log('HELLO LILLIA');

const { readdirSync } = require('fs');

// javascript object destruction 


//dz primitive data types are

const x = 121234

const human =  {
   x: 123543256,
   run: function(source) {
    console.log('')
  }
}

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