const key = "8dd21966983c4da092a154427211705"
const base = "http://api.weatherapi.com/v1/current.json"
const astroBase = "http://api.weatherapi.com/v1/astronomy.json"
const locationName = document.querySelector("#location-card")

  async function getCity(city) {
    const locationWeather = `${base}?key=${key}&q=${city}`
    try {
      let response = await axios.get(locationWeather)
        console.log(response.data)
           const data = response.data
            cityName(data)
      return data
       } catch (error) {
          console.error(error)
       }
  }
    


function cityName(data) {
  let cityIcon = `${data.current.condition.icon}`
  let workingIcon = cityIcon.replace("//", "https://")
  console.log(workingIcon)
  

  let dayOrNightImg=""
  if (data.current.is_day == 0) {
    dayOrNightImg="./nightTimeImg.png"
  }
  else {
    dayOrNightImg="./dayTimeImg.png"
  }


  let cityNames = `
  <div class="locationCard">
    <section class="image-container">
      <img id="dayOrNightPic" src="${dayOrNightImg}">
      <img id="iconImg" src="${workingIcon}">
    </section>
    <h1 id="daName">${data.location.name}</h1>
    <h2>In normal It's: ${data.current.temp_c}°C</h2>
    <h3>In American It's: ${data.current.temp_f}°F</h3>
    <h5>It's: ${data.current.condition.text}</h5>
    <h1>Feels like:${data.current.feelslike_f}°F</h1>
    <h2>Humidity is:${data.current.humidity}</h2>
    <h3>Wind mph:${data.current.wind_mph}</h3>
  </div>
  <footer>${data.location.name} ${data.location.localtime}</footer>
  `
  locationName.insertAdjacentHTML("beforeend", cityNames)
  return cityNames


 }

 
const form = document.querySelector(".location")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const input = document.querySelector("#city-search").value
  removeCity(locationName)
  getCity(input)
  document.querySelector("#city-search").value= " "
})


function removeCity(removingCity) {
  while (removingCity.lastChild) {
    removingCity.removeChild(locationName.lastChild)
  }
}


