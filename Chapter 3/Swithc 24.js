// Task: 1 === monday, 2 ==== Tuesday, 3 === Wednesday, 4 === Trusday, 5 === Friday, 6 === Saturday.   using Else if and Swite case

// let date = new Date()

// let todya = date.getDay()

// if(todya === 1) {
//     console.log(' today is monday');
// } else if(todya === 2) {
//     console.log('Today is TuesDay');
// } else if(todya === 3) {
//     console.log('Today is Wednesday');
// } else if(todya === 4){
//     console.log('Today is Trusday');
// } else if (todya === 5) {
//     console.log('Today is friday');
// } else if(todya === 6) {
//     console.log('Today is Saturday');
// }


// ====================================>>>>>>>>>>


let date = new Date()
let today = date.getDay()

switch(today) {
    case 1: 
        console.log('Today is monday');
    case 2: 
        console.log('Today is Tuesday');
        break
    case 3: 
        console.log('Today is Wednesday');
        break
    case 4: 
        console.log('Today is Trusday');
        break
    case 5: 
        console.log('Today is Friday');
        break
    case 6: 
        console.log('Today is Suturday');
        break
    default: console.log('is not a valid number');
}

