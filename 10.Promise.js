// // Call Back Functions

// function notifyAll(fnSms, fnEmail){
//     console.log("Starting Notification Process")

//     fnSms() // fnSMS Functional Call
//     fnEmail() // fnEmail Functional Call
// }

// // Passing Functions itself to other functions as an arguments

// // notifyAll Functional Call
// notifyAll(
//     function(){
//         console.log("SMS Sent")
//     },
//     // fnSMS Function Definition
//     function(){
//         console.log("Email Sent")
//     }
//     // fnEmail Function Defintion
// )

// console.log("End of Script")


// // 2. Asynchronous Callback Function

// function notifyAllAsynchronous(fnSms, fnEmail){

//     setTimeout(
//         function(){
//             console.log("Starting Notification Process")

//             fnSms() // fnSMS Functional Call
//             fnEmail() // fnEmail Functional Call
//         }, 2000
//     ) 
//     // Setting Timeout for 2000 milli seconds
// }

// // notifyAllAsynchronous Functional Call
// notifyAllAsynchronous(
//     function(){
//         console.log("SMS Sent")
//     },
//     // fnSMS Function Definition
//     function(){
//         console.log("Email Sent")
//     }
//     // fnEmail Function Defintion
// )

// console.log("End of Script")


// Promises 

var keepHisWord
keepHisWord = true

promise1 = new Promise(
                        // Call Back Function as an Argument
                       
                            function(resolve, reject){
                                setTimeout(
                                    function(){
                                        if(keepHisWord){
                                            resolve("The man likes to keep his word")
                                        } else{
                                            reject("The man doesn't want to keep his word")
                                        }
                                    }, 2000
                                )
                               
                        }
                     )
console.log(promise1)

console.log("End of Script")
