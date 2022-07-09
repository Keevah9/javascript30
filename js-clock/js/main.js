
const secondHand = document.querySelector('.sec-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const currentTime = new Date()

    const seconds = currentTime.getSeconds()
    const hour = currentTime.getHours()
    const mins = currentTime.getMinutes()

    const secondsDegrees = ( (seconds / 60) * 360 ) + 90
    const minsDegrees = ( (mins / 60) * 360 ) + 90
    const hourDegrees = ((hour / 12) * 360 )+ 90

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minHand.style.transform = `rotate(${minsDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees})`
}
setInterval(setDate, 1000)// run every sec



