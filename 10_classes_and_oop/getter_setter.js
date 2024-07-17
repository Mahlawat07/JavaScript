class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sagar`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("s@sagar.ai", "abc")
console.log(hitesh.email)