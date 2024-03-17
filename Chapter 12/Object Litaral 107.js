const rect = {
    width: 10,
    height: 20,

    drow: function () {
        console.log('Im learning OOP');
        console.log('My width is ' + this.width);
        console.log('My Height is ' + this.height);
    }
}
rect.drow()

rect.height = 100

rect.drow()
