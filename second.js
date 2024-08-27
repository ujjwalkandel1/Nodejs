// const fs = require('fs');

// fs.appendFile("hey.txt", "I love you too", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })


// for change rename

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.erroe(err);
//     else console.log("done");
// })

//copy
// fs.copyFile("hello.txt", "./copy/hello2.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })

//unlink -> file delete

// fs.unlink("hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("removed")
// })

//rmdir or rm => deleted folder

    // fs.rmdir("./copy",{recursive: true}, function(err){
    //     if(err) console.error(err);
    //     else consolr.log("removed");
    // })

// new
// go no website and type localhost:3000 you will see" hello world"
const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000);