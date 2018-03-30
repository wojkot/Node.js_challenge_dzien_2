//Twój kod

const fs = require('fs');

process.argv.forEach((val, index) => {
    if (index > 1) {
        fs.readFile('C:/Users/Wojciech/Documents/Motorola Academy/Nodejs/Node.js_challenge_dzien_2/app/data/zadanieDnia/' + val, 'utf8', (err, data) => {
            if (err === null) {
                resultString = "";
                console.log("Input text: " + data);
                data.split("").forEach((val, index) => {
                    if (index % 2 == 0) {
                        resultString += val.toUpperCase();
                    }
                    else {
                        resultString += val.toLowerCase();
                    }
                });
                console.log("Output text: " + resultString);
                fs.writeFile('C:/Users/Wojciech/Documents/Motorola Academy/Nodejs/Node.js_challenge_dzien_2/app/data/zadanieDnia/_mod_' + val, resultString, err => {
                    if (err === null) {
                        console.log("Data succesfully saved.")
                    }
                    else {
                        console.log("An error occured during saving data.")
                    }
                });


            }
            else {
                console.log("Error in reading file.");
            }
        });
    }
})