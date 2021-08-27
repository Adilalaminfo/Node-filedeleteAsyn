const fs =require('fs');

// fs.writeFile("Read.pdf","My name is Md Adil Alam I am fine what about you", (err)=>{

//     console.log("files created");
// });

fs.unlink('./Read.pdf',(err)=>{
    console.log("File deleted");
});