function Home() {
    return (`<h1>Home</h1>
    `)
}

function About() {
    return (`<h1>About</h1>
    `)
}

function Contacts() {
    return (`<h1>Contacts</h1>
    `)
}

function Header() {
    return (`<ul>
    <li><a data-ref="/" href="/">Home</a></li>
    <li><a data-ref="/about" href="/about">About</a></li>
    <li><a data-ref="/contacts" href="/contacts">Contacts</a></li>
</ul>
    `)
}

function Main() {
    return (`<main>
    <div data-link="/">${Home()}</div>
    <div data-link="/about">${About()}</div>
    <div data-link="/contacts">${Contacts()}</div>
</main>
    `)
}

function App() {
    return (`
    ${Header()}
    ${Main()}
    `)
}

let body = document.querySelector('body')
let app = document.createElement('div')
app.innerHTML = App()
body.appendChild(app)

let comps = document.querySelectorAll('div[data-link]')
let compsEl = Array.from(comps).find((item) => item.dataset.link === '/')

document.querySelectorAll('div[data-link]').forEach((item) => item.remove())
document.querySelector('main').appendChild(compsEl)

let refs = document.querySelectorAll('a[data-ref]')
refs.forEach((item) => {
    item.addEventListener('click', function (ev) {
        ev.preventDefault()

        let el = Array.from(comps).find((item) => item.dataset.link == ev.currentTarget.dataset.ref)
        document.querySelectorAll('div[data-link]').forEach((item) => item.remove())

        document.querySelector('main').appendChild(el)
    })
})
