async function sendData(user){
    axios.post('http://127.0.0.1:5000/api/send_data',user.getJSON())
    .then(res => {
       console.log(res);
       console.log(res.data);
    })

}

console.log("Before api call");
sendData(bryan);
console.log("After api call");



// This is for posting to Flask using Express library

// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser'); 

// var request = require('request-promise'); 
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: false })); 
 

// app.get("/postToFlask", async (req, res) => {

// })


/*

 
var app = express(); 
  

app.get('/postdatatoFlask', async function (req, res) { 
    var data = { // this variable contains the data you want to send 
        data1: "foo", 
        data2: "bar" 
    } 
 
    var options = { 
        method: 'POST', 
        uri: 'http://yourflaskserverIPorURL:port/postdata', 
        body: data, 
        json: true // Automatically stringifies the body to JSON 
    }; 
     
    var returndata; 
    var sendrequest = await request(options) 
    .then(function (parsedBody) { 
        console.log(parsedBody); // parsedBody contains the data sent back from the Flask server 
        returndata = parsedBody; // do something with this data, here I'm assigning it to a variable. 
    }) 
    .catch(function (err) { 
        console.log(err); 
    }); 
     
    res.send(returndata); 
}); 
  
app.listen(3000); 

*/ 

// async means asynchronous and is similar to fetch() in node
// 


// async function getApi(){
//     const response = await fetch('http://127.0.0.1:5000/api/get_user')
//     return await response.json();
// }


// console.log("Working");

// async function getResponse(){
//     await console.log(getApi());
//     await console.log("Working 2");
// }






// const express = require('express')
// var app = express();
// var bodyParser = require('body-parser'); 
// var request = require('request-promise'); 
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: false }));   

// app.get('/postdatatoFlask', async function (req, res) { 
//     var data = { // this variable contains the data you want to send 
//         Username: "bbonil01", 
//         Password: "password456",
//         Email: "bbonil01@nyit.edu"
//     } 
 
//     var options = { 
//         method: 'POST', 
//         uri: 'http://127.0.0.1:5000/api/send_data', 
//         body: data, 
//         json: true // Automatically stringifies the body to JSON 
//     }; 
     
//     var returndata; 
//     var sendrequest = await request(options) 
//     .then(function (parsedBody) { 
//         console.log(parsedBody); // parsedBody contains the data sent back from the Flask server 
//         returndata = parsedBody; // do something with this data, here I'm assigning it to a variable. 
//     }) 
//     .catch(function (err) { 
//         console.log(err); 
//     }); 
     
//     res.send(returndata); 
// }); 
  
// app.listen(5500); 







//Testing code not functioning

// async function postToApi(info){
//     const post = await fetch(`http://127.0.0.1:5000/api/send_data`,{
//         method: 'POST', body: {"Username":"Bbonil01","Password":"password456","Email":"Bbonil01@nyit.edu"}})
//     console.log(post);
// }





// async function sendData(){
//     await postToApi("nada");
// }

// sendData();
// console.log("Working 3");