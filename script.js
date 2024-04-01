// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=cf8d79a4081c3df2aae6329af34e1267
// http://api.openweathermap.org/geo/1.0/direct?q=Самара&appid=cf8d79a4081c3df2aae6329af34e1267


function weather() {

    let city_name = document.getElementById('inp').value

    if (city_name === null || city_name === "") {
        alert("Вы не ввели город!");
        return;
    }

    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+city_name+'&appid=cf8d79a4081c3df2aae6329af34e1267';
    console.log(url)
    fetch(url).then(async (response) => {
         
        const ans = await response.json();
        
        if (typeof ans[0] === "undefined") { 
            alert("Вы ввели не верный город!")
        }

        const { lat, lon } = ans[0];
        console.log(typeof(lat))

        urlweather(lat, lon);      
    })
}

//получение данных о погоде
function urlweather(lat,lon) { 

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=cf8d79a4081c3df2aae6329af34e1267&units=metric&lang=ru'
    console.log(url)

    fetch(url).then(async (response) => {
         
        const ans = await response.json();
        document.getElementById('temp').innerHTML = Math.round(ans.main.temp) + '°C'
        document.getElementById('feels').innerHTML = Math.round(ans.main.feels_like) + '°C'
        document.getElementById('speed').innerHTML = Math.round(ans.wind.speed) + 'м/с'
        document.getElementById('humidity').innerHTML = Math.round(ans.main.humidity) + '%'
        document.getElementById('city').innerHTML = ans.name          

    })
}
  
function geoFindMe() {

    function success(position) {
      const lat  = position.coords.latitude;
      const lon = position.coords.longitude;

        console.log(lat, lon)
      
      urlweather(lat,lon) 
    
    }
  
    function error() {
        alert('Невозможно получить ваше местоположение, введите город в ручную');
    }
  
    if (!navigator.geolocation) {
        alert('Geolocation не поддерживается вашим браузером, введите город в ручную');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
}

window.addEventListener('load', geoFindMe, {timeout: 30000, enableHighAccuracy: true, maximumAge: 75000});

