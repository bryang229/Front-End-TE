class User{
    constructor(username,password,email){
      this.username = username;
      this.password = password;
      this.email = email;
    }
  
    getJSON = () => {
      return {
        "Username": `${this.username}`,
        "Password": `${this.password}`,
        "Email":    `${this.email}`
      }
    }
}


class Component{
    constructor(rootElement,tag, isShowing = true){
        this.rootElement = document.getElementById(`${rootElement}`);
        this.tag = tag;
        this.parentElement = this.rootElement.parentElement;
        this.isShowing = isShowing;
    }


    hide = () => {
        if(this.isShowing){
            this.parentElement.removeChild(this.rootElement);
            this.isShowing = false;
        }
    }
    
    show = () => {
        if(!this.isShowing){
            this.parentElement.appendChild(this.rootElement);
            this.isShowing = true;
        }
    }
}