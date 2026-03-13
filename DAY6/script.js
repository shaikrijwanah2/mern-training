const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric"
const apiKey='563aaddcbb173905f3b7936b61dc239d'
const searchBox=document.querySelector('.input');
const searchBtn=document.querySelector('button');
async function checkweather(city) {
    var response=await fetch(apiUrl+'&appid=${apiKey}'+'&q=${city}');
    var data=await response.json();
    console.log("Data"data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+'℃'
    document.querySelector(".humidityValue").innerHTML=data.main.humidity+'%';
    document.querySelector(".speedValue").innerHTML=data.wind.speed+'km/h';
    document.querySelector(".w-img").src='assests/${data.weather[0].main.toLowerCase()'}.png';}
    searchBtn.addEventListener("click",()=>{
        checkweather(searchBox.value);
    })
;
