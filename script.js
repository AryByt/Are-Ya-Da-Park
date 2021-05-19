

const key = "8dd21966983c4da092a154427211705"
const base = "http://api.weatherapi.com/v1/current.json"
const astroBase = "http://api.weatherapi.com/v1/astronomy.json"
const locationName =document.querySelector("#location-card")

async function getAstros(astronomy) {
  const locationAstro = `${astroBase}?key=${key}&q=${astronomy}`
  try {
    let res = await axios.get(locationAstro)
      console.log(res.data.astronomy.astro)
      const data = res.data.astronomy.astro
      astroInfo(data)
         return data
     } catch (error) {
        console.error(error)
     }
   }


function astroInfo(data) {

  let astroNames = `
   <h1>Sunrise ${data.sunrise}</h1>
   <h1>Moonrise${data.moonrise}</h1>
   <h1>Moonset${data.moonset}</h1>
   <h1>${data.moon_phase}</h1>
   <h1>Sunset${data.sunset}</h1>
   
  
  `
  locationName.insertAdjacentHTML("beforeend", astroNames)
  return astroNames
}

 
const form = document.querySelector(".location")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const input = document.querySelector("#city-search").value
  removeCity(locationName)
  getAstros(input)
  document.querySelector("#city-search").value= " "
})


function removeCity(removingCity) {
  while (removingCity.lastChild) {
    removingCity.removeChild(locationName.lastChild)
  }
}









