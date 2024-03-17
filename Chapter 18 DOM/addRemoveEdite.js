// Get all Id:
const inputBox = document.getElementById('inputBox')
const listId = document.getElementById('listId')
const btn = document.getElementById('btn')

// Add item:
btn.addEventListener('click', function (e) {
    // console.log(e);
    const item = listId.lastElementChild.cloneNode(true)
    item.innerHTML = 'New item Add'
    listId.appendChild(item)
})

// Remove:
listId.addEventListener('dblclick', function (e) {
    e.target.remove()
});

// Update Item: 
[...listId].forEach((li) => {
    listId.addEventListener('click', function (e) {
        console.log(e.target);
    })
})
