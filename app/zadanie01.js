//Twój kod

const fs = require('fs');

fs.readFile("./data/zadanie01/input.json", 'utf8', (err, data) => {
    if (err == null) {
        console.log("Data succesfully read.")
        var sum = 0;

        JSON.parse(data).forEach((val) => {
            sum += parseInt(val);
        })
        console.log("sum = " + sum);

        fs.writeFile("./data/zadanie01/sum.txt", sum, err => {
            if (err === null) {
                console.log("Data succesfully saved.")
            }
            else {
                console.log("An error occured during saving data.")
            }
        });

    }
    else {
        console.log("An error occured during reading data.")
    }
});

