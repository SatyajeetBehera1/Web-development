// we are inside module

function average(arr) {
    let sum = 0
    arr.forEach(element => {
        sum = sum + element
    });
    return sum/arr.length
}
// for single function
//module.exports=average

//for multiple function
module.exports={
    avg : average
}

//module.exports.name = "Satya";