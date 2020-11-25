console.log("this is a practice file")

function dell(name, text) {

    //let name ="name1"; //local scope wont make a difference
    console.log(name + " is prcticing jscript and " + text )
}

let name = "russell";
let name2 = "someone";
let name3 = "anyone";
let name4 = "no.one";

let text = "coding";


dell(name , text);
dell(name2 , text);
dell(name3 , text);
dell(name4 , text);
//console.log(`${name} is practicing jscript`);

function sum(a,b,c){
    let d = a + b + c;
    return d;
}

let returnVal = sum(1,2,3);
console.log(returnVal);