console.log(Cookies.get("Username"));

if(Cookies.get("Username") != undefined)
    document.getElementById('greeting').innerHTML += Cookies.get("Username") + "!";

