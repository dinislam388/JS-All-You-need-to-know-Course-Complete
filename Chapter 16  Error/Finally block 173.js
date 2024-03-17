// Try or catch je jetai execution hok na kno amar jodi nirdisto kicu kaj thake je amr ai kaj gulo kortei hbe taile tokn ai ami finally block ta use korbo.
// kaorn ata must be print korbe amat console a Error holeo na holeo..This is our finally block 

try {
    console.log('This is line 1');
    console.log('This is line 2');
    console.log('This is line 3');
    // throw new Error('This is your Error')
    console.log('This is line 4');
} catch (e) {
    console.log(e.message);
} finally {
    console.log('I am finally block');
}