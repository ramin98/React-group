// let list = document.querySelector('#list')
// let searchName = document.querySelector('#search-name')
// let searchCity = document.querySelector('#search-city')

// let choose = document.querySelector('#choose')
// let buttons = document.querySelectorAll('#filter button')
// let chooseFilter

// buttons.forEach((item) => {
//     item.addEventListener('click', (event) => {
//          chooseFilter = event.target.innerText.toLowerCase()
//          choose.innerText = event.target.innerText
//     })
// })

// fetch('http://localhost:5000/users/1',{
//     method: 'HEAD'
// })
// .then((res) => console.log(res))

// const deleteItem = async (id) => {
//     let response = await fetch(`http://localhost:5000/items/${id}`,{
//         method: 'DELETE'
//     })
//     getFilteredList()

// }

// const getFilteredList = async () => {
//     let response = await fetch(`http://localhost:5000/items`)
//     let data = await response.json()
//     console.log(data)
//     list.innerHTML = ''
//     data.forEach(element => {
//         let li = document.createElement('li')
//         li.innerHTML = `<p>${element.name}</p>
//         <p>${element.username}</p>
//         <p>${element.email}</p>
//         <p>${element.address.city}</p>
//         <button onclick="deleteItem(${element.id})">X</button>
//         `
//         list.appendChild(li)
//     });
// }

// getFilteredList()

// search.addEventListener('input', getFilteredList)


// fetch("http://localhost:5000/items")
//   .then((res) => {
//     console.log(res);
//     return res.text();
//   })
//   .then((data) => console.log(data));




 let form = document.querySelector('form')

 fetch('http://localhost:5000/setCookie')
 .then((res) => res.text())
 .then((data) => console.log(data))

 fetch('http://localhost:5000/getCookie')
 .then((res) => res.text())
 .then((data) => console.log(data))

 document.cookie = 'cookie1=test; expires=Sun, 29 Apr 2024 15:38:00 UTC; path=/'

//  form.addEventListener('submit', (event) => {
//   event.preventDefault()
//  })
