let loggedInDiv = new Component("loggedIn","div")
let loginDiv = new Component("loginDiv","div");
let signUpDiv = new Component("signUpDiv","div");
let errorTextL = new Component("errorTextL","p");

document.getElementById("showLogin").addEventListener("click", () => {
    signUpDiv.hide();
    loginDiv.show();
})

document.getElementById("showSignUp").addEventListener("click", () => {
    loginDiv.hide();
    signUpDiv.show();
})

document.getElementById("logoutBtn").addEventListener("click", () => {
    Cookies.remove("Username");
    loginDiv.show();
    loggedInDiv.hide();
})

document.getElementById("submitL").addEventListener("click", submitUserL)
document.getElementById("submitS").addEventListener("click", submitUserS)

function submitUserL(e){
    e.preventDefault();
    let email = document.getElementById("emailL").value;
    let username = document.getElementById("usernameL").value;
    let password = document.getElementById("passwordL").value;
    
    let user = new User(username,password,email);
    
    axios.post("http://127.0.0.1:5000/api/check_user", user.getJSON())
    .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.Status);
        let status = res.data.Status == "Success" ? true : false;
        
        if(status){
            console.log("Setting cookies");
            Cookies.set("Username",`${user.username}`)
            console.log("Cookies: ", Cookies.get("Username"));
            console.log("success now hiding");
            errorTextL.hide();
            console.log("Now redirecting")
            window.location.replace("/home.html")
    
        }
        else{
            errorTextL.show();
        }
    })
}

function submitUserS(e){
    e.preventDefault();
    let email = document.getElementById("emailS").value;
    let username = document.getElementById("usernameS").value;
    let password = document.getElementById("passwordS").value;
    
    let user = new User(username,password,email);
    
    axios.post("http://127.0.0.1:5000/api/send_data", user.getJSON())
    .then(res => {
        console.log(res);
        console.log(res.data);
        })

        Cookies.set("Username",`${user.username}`)
        loggedInDiv.show();
        signUpDiv.hide();
        console.log("Now redirecting")
        window.location.replace("/home.html")
    
}



if(Cookies.get("Username") != undefined){
    document.getElementById("greeting").innerHTML += Cookies.get("Username");
    loginDiv.hide();
    signUpDiv.hide();
}
else
    loggedInDiv.hide();

errorTextL.hide();

signUpDiv.hide();








// ruby bus and ovia 
