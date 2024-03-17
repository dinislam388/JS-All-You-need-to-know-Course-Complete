// Kono akta functiona ar samne Async likhe dilei seta akta Promise return korbe and seta niay amra sob dhoroner promise ar kaj korte parbo

async function myPromise() {
    return setTimeout(() => {
        'Test'
    }, 2000);
}
myPromise().then((v) => console.log(v))