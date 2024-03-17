// Catch ar pore amra je akta e peramitter nei seta na nileo kaj korbe and amra sekhanei error ta likhe dite pari

try {
    console.log('This is Line 1');
    console.log('This is Line 2');
    console.log('This is Line 3');
    throw new Error('')
    console.log('This is Line 4');
} catch {
    console.log('This is my new custome Error');
} finally{
    console.log('This is your Finally Block');
}
