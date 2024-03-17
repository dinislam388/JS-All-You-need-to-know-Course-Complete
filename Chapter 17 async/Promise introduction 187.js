// What is Promise.? 
// => Promise is contractor Function je function use kore amra akta promise obejct create kore thaki. Promise mainly 2 ta peramitter ney Resolev and Reject jodi kaj ta success hoy taile reoslve hoy ar jodi unsuccessfull hoy taile reject hoy. 

// Why i am use promise.?
// => Callback ar pera komanor jonno amra promise use korbo. 

// Promise ar 2 ta sitution thake Panding and Resolve or Reject

// What is then catch in promise.?
// => jodi promise ta resolve hoy taile seta dhore then diay ar jodi Error hoy taile dhore catch diay. 


// Create my promise. 
// How to work Promise 
function getIphone(isPassd) {
    return promise = new Promise((resolve, Reject) => {
        setTimeout(() => {
            if (isPassd) {
                resolve('I have got a new I Phone')
            } else{
                Reject('I have faild')
            }
        }, 2000);
    })
}
getIphone(true) 
.then((response) => {
    console.log(response);
}) .catch((e) => {
    console.log(e);
})
