const delay = s => new Promise(resolve => setTimeout(resolve, s*1000))

delay(2).then(() => console.log('2 sec delay'))
delay(3).then(() => console.log('3 sec delay'))
delay(4).then(() => console.log('4 sec delay'))
delay(5).then(() => console.log('5 sec delay'))
delay(6).then(() => console.log('6 sec delay'))
