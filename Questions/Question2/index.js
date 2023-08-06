const fs = require('fs');
const path = require('path');


//create a folder/directory named: Students
// fs.mkdir('./Students', ()=>{
//     try {
//         console.log("folder created successfully")
//     } 
//     catch (error) {
//         console.log(error);
//     }
// })

// //In the students directory, create a file named: users
// const newFile = path.join(__dirname, "Students", "user.js");
// const content = "Let the poor breef!"

// fs.writeFile(newFile, content, ()=>{
//     try {
//         console.log("file created successfully")
//     } 
//     catch (error) {
//         console.log(error);
//     }
// });

//update the Students directory to Names
fs.rename("./Students", "./Names", function (){
    try {
        console.log("folder renamed successfully");
    } catch (error) {
        console.log(error);
    }
});