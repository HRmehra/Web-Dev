console.log("this is module");
function average(Array){
    let sum = 0 ;
    Array.forEach(element => {
        sum+=element;
    });
    return sum/Array.length;
}

module.exports =average;