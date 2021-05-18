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
  <div class="locationCard"
  <h3 id="names">${data.location.name}</h3>
  <img id="ax" src="https://darkhunts.com/wp-content/uploads/2020/05/fix-internet-connection.png">
  <p>${data.current.temp_f}°F</p>
  <h4>${data.current.cloud}</h4>
  <h5>${data.current.condition.text}</h5>
  </div>
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
{/* <img id="ax" src="${data.current.condition.icon}"></img> */}