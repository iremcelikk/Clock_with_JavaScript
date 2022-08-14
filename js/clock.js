let name=document.querySelector("#name")
let isim=prompt("Adınızı Giriniz")
name.innerHTML=`${isim[0].toUpperCase()}${isim.slice(1).toLowerCase()}`

let date=document.querySelector("#date")
let day
let hours
let minutes
let seconds

function time(){
    const d = new Date()
    day=d.getDay()
switch (day){
    case 0:
        day="Pazar"
        break
    case 1:
        day="Pazartesi"
        break
    case 2:
        day="Salı"
        break
    case 3:
        day="Çarşamba"
        break
    case 4:
        day="Perşembe"
        break
    case 5:
        day="Cuma"
        break
    case 6:
        day="Cumartesi"
        break
}
    hours=d.getHours()
    minutes=d.getMinutes()
    seconds=d.getSeconds()
    date.innerHTML=`${hours}:${minutes}:${seconds} ${day}`
}
setInterval(time,1000)