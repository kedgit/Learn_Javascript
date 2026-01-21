let name="kedar"
function outer(){
    let out=true
    function inner(){
        console.log(out);
        
    }
    console.log(name);
    
    inner()
}
outer()