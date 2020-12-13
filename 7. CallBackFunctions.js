// function notifyAll(fnsms, fnemail){
//     setTimeout(
//     function(){
//     console.log("Starting the Script")
//     fnsms()
//     fnemail()
//     }
//     ,2000)
// }

// notifyAll(
//     function(){
//     console.log("Sending SMS")
//     }, 
//     function(){
//         console.log("Sending Email")
//     }
//     )// notifyall calling

// console.log("Ending the Script")

const some= true
var somePromise = new Promise(
    function(resolve,reject){
        setTimeout(function(){
            if(some){
                return resolve("running the script successfully")
            }
            else{
                return reject("not running successfully")
            }
        },2000) 
    }
)
console.log(somePromise)

console.log("End of Script")

