const list = document.getElementById('list')
const btn = document.getElementById('btn')

btn.addEventListener('click', function (e) {
    // console.log(e);
    const item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'New Item Add'
    console.log(item.innerHTML);
    list.appendChild(item)
})