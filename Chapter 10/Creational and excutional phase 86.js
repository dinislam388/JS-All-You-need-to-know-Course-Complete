// ***Creatinal Phase
// ==>> Cretaional phasea hocce giay amader sob code gulo ak sthe read kore and information store kore Like 1st a dekhe ki ki Veriable ace then dekhe koyta function ace then funtion beshy thakle tar jonno alada alada akta numbering set kore Reffacarace dhore rakhe jonno konta koto number function ar Funtion ar nam and veriable defination ta store kore.
// Example: 
function a() {     // a() name ta store kore
    console.log('This is Creational Phase');
} 

// Veriable ar khetre 
var a = 10  // normally amra jeta dekhi But JavaScript buttom ar veriable ar moto dekhe 1st Defination the Value 
var a  // Variable definaion ta store kore
a = 10 

// Veriable and funtion ar store ar khetre JavaScript alada alada Object Create korbe jar moddhe agula store korbe

// ***Excutional Phase
// Excutional Phase a giay dekhe funtion gula kothay call kora ace kina jodi funtion gula kothao call kora thake taile setar excution kora suru kore.
// Variable ar khetreo same Defination gulo dhore Excution kora suru kore 

// Ak kotay Excution ar somoy ata khuje ai Defination ba Diclaretion ar value gulo kothay ace atokn to just nam gulo store kore rakha hoice akn execution



// Example This for Undestranding Easily and Details: 
function a() {
    b()
    console.log('Excuteion context A ');
}
function b() {
    d()
    console.log('Excuteion context B');
}
function c() {
    console.log('Excuteion context C');
}
function d() {
    c()
    console.log('Excuteion context D');
}
const Golobal = 10;
a()
console.log('This is global Context');