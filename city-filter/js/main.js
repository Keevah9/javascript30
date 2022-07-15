const inputs = document.querySelector('input')
let formContent = document.querySelector('.formContent')
const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//fetch api
//filter city by name
//if user input, pop up the city
//sort by rank or distance
//map 

const cities = []

fetch(url)
.then(res => res.json())
.then(data => cities.push(...data))
console.log(cities)

//filtering based on a keyword
const findMatch = ((word, cities)=>{
    return cities.filter(place =>{
        let regex = new RegExp (word, 'gi')

        let current = place.city.match(regex) || place.state.match(regex)
        
        return current
    })
    
})

let commas = (num)=> num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function checkMatch(){
    let matchItems = findMatch(this.value, cities)
    console.log(matchItems)

    matchItems.sort((a,b)=>{
       return a.latitude - b.latitude
    })

    
    formContent.innerHTML =  matchItems.map(place =>{
        //replace value with new colored value
        let regex = new RegExp (this.value, 'gi')
        let cityName = place.city.replace(regex, `<span class="hLight">${this.value} </span>`)
        let stateName = place.city.replace(regex, `<span class="hLight">${this.value} </span>`)



        return `
             <p> 
              <span>${cityName}, ${stateName}</span>
                <span>${commas(place.population)}</span>
         </p>  
        `
    }).join('')
    // formContent.innerHTML = content 
}
    


inputs.addEventListener('change', checkMatch)
inputs.addEventListener('keyup', checkMatch)


















