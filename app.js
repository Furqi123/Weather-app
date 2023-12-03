

let cityName = document.getElementById('cityName')
let weather = document.getElementById('weather')
let feels = document.getElementById('feels') 
let humidity = document.getElementById('Humidity')
let wind  = document.getElementById('wind')
let clouds = document.getElementById('clouds')
let city = document.getElementById('city')
let temp = document.getElementById('temp')
let wImg = document.getElementById('wImg')
// let country = document.getElementById('country')
navigator.geolocation.getCurrentPosition((location) => {
    let lat = location.coords.latitude
    let lon = location.coords.longitude
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4dce3879f81d250a6e851c7ceef9a94&units=metric`)
    .then(res => res.json())
    .then((res) => { 

        weather.innerHTML = res.weather[0].main;
        city.innerHTML = res.name +","+res.sys.country
        feels.innerHTML = Math.floor(res.main.feels_like) + "°C";
        humidity.innerHTML = res.main.humidity + "%";
        wind.innerHTML = res.wind.speed + "km/h";
        clouds.innerHTML = res.clouds.all + "%"
        temp.innerHTML = Math.floor(res.main.temp_max) + "°"
        if(res.weather[0].main == "Clouds"){
            wImg.src = "./img/cloud.svg"
            }
            else if(res.weather[0].main == "Rain"){
                wImg.src = "./img/extreme-night-rain.svg"
            }
    
            else if(res.weather[0].main == "Snow"){
                wImg.src = "./img/Snow.jpeg"
            }
            else if(res.weather[0].main == "Mist"){
                wImg.src = "./img/mist.svg"
            }
            else if(res.weather[0].main == "Smoke"){
                wImg.src = "./img/smoke.svg"
            }
    
            else if(res.weather[0].main == "Haze"){
                wImg.src = "./img/haze.svg"
            }
            else if(res.weather[0].main == "Fog"){
                wImg.src = "./img/Fog.png"
            }
            else if(res.weather[0].main == "Tornado"){
                wImg.src = "./img/Tornado.png"
            }
            else{       
                      wImg.src = "./img/clear.svg"      
                    
                    }
    
    })

})






let search = () =>{


    let getData = new Promise((resolve,reject)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
        .then(res => res.json())
        .then(res => {
            weather.innerHTML = res.weather[0].main;
        city.innerHTML = res.name +","+res.sys.country
            feels.innerHTML = Math.floor(res.main.feels_like) + "°C";
            humidity.innerHTML = res.main.humidity + "%";
            wind.innerHTML = res.wind.speed + "km/h";
            clouds.innerHTML = res.clouds.all + "%"
            temp.innerHTML = Math.floor(res.main.temp_max) + "°"
             console.log(res)
             if(res.weather[0].main == "Clouds"){
                wImg.src = "./img/cloud.svg"
                }
                else if(res.weather[0].main == "Rain"){
                    wImg.src = "./img/extreme-night-rain.svg"
                }
        
                else if(res.weather[0].main == "Snow"){
                    wImg.src = "./img/Snow.jpeg"
                }
                else if(res.weather[0].main == "Mist"){
                    wImg.src = "./img/mist.svg"
                }
                else if(res.weather[0].main == "Smoke"){
                    wImg.src = "./img/smoke.svg"
                }
        
                else if(res.weather[0].main == "Haze"){
                    wImg.src = "./img/haze.svg"
                }
                else if(res.weather[0].main == "Fog"){
                    wImg.src = "./img/Fog.png"
                }
                else if(res.weather[0].main == "Tornado"){
                    wImg.src = "./img/Tornado.png"
                }
                else{       
                          wImg.src = "./img/clear.svg"      
                        
                        }
          cityName.value = ""
        })
        .catch(err => reject(err))
       })
    getData
    .then(res => console.log(res))
    .catch(err => {
        
        cityName.value = ""
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        console.log(err)
    
    
    })

    
}




