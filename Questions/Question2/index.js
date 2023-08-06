const fs = require('fs');
const path = require('path');


//create a folder/directory named: Students
fs.mkdir('./Students', ()=>{
    try {
        console.log("folder created successfully")
    } 
    catch (error) {
        console.log(error);
    }
})

//
const newFile = path.join(__dirname, "Students", "users.js");
const content = "Eseosa's Details"

fs.writeFile(newFile, content, ()=>{
    try {
        console.log("file created successfully")
    } 
    catch (error) {
        console.log(error);
    }
});

