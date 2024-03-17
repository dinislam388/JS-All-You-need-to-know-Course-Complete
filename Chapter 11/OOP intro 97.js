// Object orianted programming intro Class: 

// Object orianted programming peradime: 

// ==>> Procedural => Normal JavaScript Code...
var width = 10
var height = 20

// Function ar sundor nam koron korte hobe and agula k Handle korte hobe

function calculateArea(width, height) {
    return width * height
}

function calculateRange(width, height) {
    return 2 * (width, height)
}

var area = calculateArea(width, height) 
var range = calculateRange(width, height)

// jokhon kono akta function akta object ar maje thake tkn take bole Mathods


// ===>> Object orianted => Right codde

var rect = {
    width: 10,
    height: 20, 

    calculateArea: function () {
        return this.width * this.height
    },
    
    calculateRange: function () {
        return 2 * (this.width + this.height)
    }
}
var area = rect.calculateArea()
var range = rect.calculateRange()

// Avhabe nirdisto akta funtion a kaj korel tar  Hishab korte easy hoy and jate kore prottek take alada kore access kora jay tar jonno amra obect orianted programming ta use korboo

// Obejct a neayr ar akta karon holo onk gulo functin ar ar akta obect create kore setar moddhr amar sob object gulo ke Rap kore dite hobe


// => Real Life Example: ami jodi amar frind k akta 3 ta gift dite chai like: 1. Note Book 2. Pen 3. Clock tahole ata to ami take alada alada kore dibo na tai na ami obossoi akta Git box a seta k vhore then take dibo ar ami jokhon seta ke akta giftbox a vhorbo setakei bolbo akta Gift Obejct. 
//  ar avhabei kaj kore object orianted progaramming je onk gulo funtion k akta object ar moddhe Rap kore jate sob gulo function akta Arear moddhe thake. 
// Boro kono Project a to amder onk functuon thake to seta amra akta object ar moddhe diay kaj korle function gulo amader access korte Subida hobe tai amra Object Orianted program use korle amder kaj gulo aro bashy easy hobe. so amra objetc orianted programming use korbo ar ata khub sohoj Easy Pera nai Chill

