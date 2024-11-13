let hourhand = document.getElementById('hourhand')
let minutehand = document.getElementById('minutehand')
let secondhand = document.getElementById('secondhand')
console.log('This console is not for you')
console.log('close the console please')
console.log('THIS SITE HAS  cREATED BY KIN')
function clock(){
    let date   = new Date();
    let second = date.getSeconds() /60
    let minute = (second + date.getMinutes()) /60
    let hour   = (minute + date.getHours()) /12
    clockhands(secondhand, second)
    clockhands(minutehand, minute)
    clockhands(hourhand, hour)
}
function clockhands(element, rotation){
    element.style.setProperty('--rotate',rotation * 360)
}
setInterval(clock, 1000)
function home(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
function about(){
    window.scrollTo({
        top:700,
        behavior:"smooth",
    })
}
function more(){
    window.scrollTo({
        top:1489,
        behavior:"smooth",
    })
}
function Contact(){
    window.scrollTo({
        top:2500,
        behavior:"smooth",
    })
}
