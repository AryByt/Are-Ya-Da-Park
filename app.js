const key = "8dd21966983c4da092a154427211705"
const base = "http://api.weatherapi.com/v1/current.json"
  
// getCity('austin')
const locationName =document.querySelector("#location-card")
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
  // console.log(data.location.name)
  let cityNames = `
  <h4 id="names">${data.location.name}</h4>
  <img src="${data.current.condition.icon}">
  <p>${data.current.temp_f}°F</p>

  `
  console.log(cityNames)
  locationName.insertAdjacentHTML("beforeend", cityNames)
  return cityNames
}
 
const form = document.querySelector(".location")
// console.log(form)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const input = document.querySelector("#city-search").value
  // console.log(input)
  removeCity(locationName)
  getCity(input)
  document.querySelector("#city-search").value= " "
})

function removeCity(removingCity) {
  while (removingCity.lastChild) {
    removingCity.removeChild(locationName.lastChild)
  }
}
// while 