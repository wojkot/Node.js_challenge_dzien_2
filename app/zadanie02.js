//Twój kod

const fs = require('fs');

fs.readdir('C:/Users/Wojciech/Documents/Motorola Academy/Nodejs/Node.js_challenge_dzien_2/app/data/zadanie02', (err, files) => {
    if (err === null) {
        console.log("Succesfully read file list.");
        files.forEach(file => {
            fs.readFile('C:/Users/Wojciech/Documents/Motorola Academy/Nodejs/Node.js_challenge_dzien_2/app/data/zadanie02/' + file, 'utf8', (err, data) => {
                if (err === null) {
                    console.log(file + ':');
                    console.log(data);
                }
                else {
                    console.log("Cannot read file content");
                }
            });
        });


    }
    else {
        console.log("Error occured in reading file list.");
    }
});