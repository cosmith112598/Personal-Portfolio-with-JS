import {films} from '../JS-files/films'
import {planets} from '../JS-files/planets'


console.log('Javascript is Running')

let mainPiece = document.querySelector('main')

planets.forEach(function(planet) {
    let planetDiv = document.createElement('div')
    let planetName = document.createElement('h1')
    let planetInformation = document.createElement('p')

    planetName.textContent = planet.name
    planetInformation.textContent = planet.residents


    planetDiv.appendChild(planetName)
    planetDiv.appendChild(planetInformation)

    mainPiece.appendChild(planetDiv)
});

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmInformation = document.createElement('p')

    filmTitle.textContent = film.title
    filmInformation.textContent = film.opening_crawl
    

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmInformation)

    mainPiece.appendChild(filmDiv)
});