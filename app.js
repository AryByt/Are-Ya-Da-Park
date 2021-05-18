const key = "8dd21966983c4da092a154427211705"
const base = "http://api.weatherapi.com/v1/current.json"
  
// getCity('austin')
const locationName =document.querySelector("#location-card")
async function getCity(city) {
  const locationWeather = `${base}?key=${key}&q=${city}`
 
  try {
    let response = await axios.get(locationWeather)
    console.log(response.data.current)
    const data = response.data
    cityName(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
function cityName(data) {
  // console.log(data.location.name)

  let cityIcon = `${data.current.condition.icon}`
  let workingIcon = cityIcon.replace("//", "https://")
console.log(workingIcon)


  let cityNames = `
  <div class="locationCard">
  <h2 id="names">${data.location.name}</h2>
  <img id="ax" src="https://b.kisscc0.com/20180705/yq/kisscc0-cloud-sunlight-drawing-sky-storm-clouds-with-hidden-sun-5b3e5f18ecd5c0.1237714015308142329701.png">
  <img id="iconImg" src="${workingIcon}">
  <h3 id="oilk"><span id="poli">Feels like</span> ${data.current.feelslike_f}°F</h3>
  <h5 id="casting"> ${data.current.condition.text}</h5>
  </div>
  `
 
  // console.log(cityNames)
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