const expretionFunc = function(greet, name) {
    function inner() {
        console.log(greet, name);
    }
    inner()
}
expretionFunc('Good Morning', 'MD Din Islam')