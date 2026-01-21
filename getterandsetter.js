class User{
    constructor(email,password){
        this.email=email
        this._password=password
    }
    // recursively call setter 
    get password(){
        return this._password
    }
    // scope error
    get password(){
        return this._password
    }
    // ovverride constructor value assign
    // set password(value){
    //     console.log("setter is called !");
    //     return this._password=value+"jk"
    // }
}
const kedar=new User("kedar","pass@123")

console.log(kedar._password);
