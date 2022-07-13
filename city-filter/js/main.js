

const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [] 

    fetch(url)
    .then(res => res.json())
    .then(data => cities.push(...data)) 

function findMatch(word, cities){
    return cities.filter(place =>{
        const regex = new RegExp(word, 'gi')//global and  insensitivity

        let correct  = place.city.match(regex)  || place.state.match(regex)

        return correct
    })
    
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatch(){
    const matchItems = findMatch(this.value, cities)
    console.log(matchItems)
    matchItems.sort((a, b) =>{
        return b.rank - a.rank
    })
    const content = matchItems.map( place =>{
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regex, `<span class="hLight"> ${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hLight"> ${this.value}</span>`)

    return ` <p> 
                <span>${cityName}, ${stateName}</span>
                <span>${numberWithCommas(place.population)}</span>
            </p>`
        
    }).join('')
    formContent.innerHTML = content
}


const span = document.querySelector('.span')
const input = document.querySelector('input')
const formContent = document.querySelector('.formContent')


input.addEventListener('change', displayMatch)
input.addEventListener('keyup', displayMatch)