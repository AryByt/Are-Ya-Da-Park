
# Are Ya Da Weather
[Deployed](https://arybyt.github.io/Are-Ya-Da-Weather/)
## Project Description
A website to search and get weather information about a specific location.
## API and Data Sample
API DOCS: https://www.weatherapi.com/docs/
Data Sample: http://api.weatherapi.com/v1/forecast.json?key=8dd21966983c4da092a154427211705&q=Istanbul &days=1
```
{
    "location": {
        "name": "Dublin",
        "region": "Dublin",
        "country": "Ireland",
        "lat": 53.33,
        "lon": -6.25,
        "tz_id": "Europe/Dublin",
        "localtime_epoch": 1621268525,
        "localtime": "2021-05-17 17:22"
    },
    "current": {
        "last_updated_epoch": 1621268100,
        "last_updated": "2021-05-17 17:15",
        "temp_c": 10.0,
        "temp_f": 50.0,
        "is_day": 1,
        "condition": {
            "text": "Light rain shower",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
            "code": 1240
        },
        "wind_mph": 10.5,
        "wind_kph": 16.9,
        "wind_degree": 250,
        "wind_dir": "WSW",
        "pressure_mb": 1008.0,
        "pressure_in": 30.2,
        "precip_mm": 1.0,
        "precip_in": 0.04,
        "humidity": 82,
        "cloud": 75,
        "feelslike_c": 8.6,
        "feelslike_f": 47.5,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 3.0,
        "gust_mph": 8.3,
        "gust_kph": 13.3
    },
    "forecast": {
        "forecastday": [
            {
                "date": "2021-05-17",
                "date_epoch": 1621209600,
                "day": {
                    "maxtemp_c": 12.5,
                    "maxtemp_f": 54.5,
                    "mintemp_c": 5.4,
                    "mintemp_f": 41.7,
                    "avgtemp_c": 8.8,
                    "avgtemp_f": 47.8,
                    "maxwind_mph": 9.8,
                    "maxwind_kph": 15.8,
                    "totalprecip_mm": 4.6,
                    "totalprecip_in": 0.18,
                    "avgvis_km": 9.5,
                    "avgvis_miles": 5.0,
                    "avghumidity": 83.0,
                    "daily_will_it_rain": 1,
                    "daily_chance_of_rain": "94",
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": "0",
                    "condition": {
                        "text": "Patchy rain possible",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                        "code": 1063
                    },
                    "uv": 4.0
                },
                "astro": {
                    "sunrise": "05:22 AM",
                    "sunset": "09:22 PM",
                    "moonrise": "09:17 AM",
                    "moonset": "02:04 AM",
                    "moon_phase": "First Quarter",
                    "moon_illumination": "48"
                },
                "hour": [
                    {
                        "time_epoch": 1621206000,
                        "time": "2021-05-17 00:00",
                        "temp_c": 5.4,
                        "temp_f": 41.7,
                        "is_day": 0,
                        "condition": {
                            "text": "Partly cloudy",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                            "code": 1003
                        },
                        "wind_mph": 4.5,
                        "wind_kph": 7.2,
                        "wind_degree": 290,
                        "wind_dir": "WNW",
                        "pressure_mb": 1002.0,
                        "pressure_in": 30.0,
                        "precip_mm": 0.0,
                        "precip_in": 0.0,
                        "humidity": 93,
                        "cloud": 25,
                        "feelslike_c": 3.8,
                        "feelslike_f": 38.8,
                        "windchill_c": 3.8,
                        "windchill_f": 38.8,
                        "heatindex_c": 5.4,
                        "heatindex_f": 41.7,
                        "dewpoint_c": 4.4,
                        "dewpoint_f": 39.9,
                        "will_it_rain": 0,
                        "chance_of_rain": "0",
                        "will_it_snow": 0,
                        "chance_of_snow": "0",
                        "vis_km": 10.0,
                        "vis_miles": 6.0,
                        "gust_mph": 9.4,
                        "gust_kph": 15.1,
                        "uv": 1.0
                    },
                    {
                        "time_epoch": 1621209600,
                        "time": "2021-05-17 01:00",
                        "temp_c": 5.6,
                        "temp_f": 42.1,
                        "is_day": 0,
                        "condition": {
                            "text": "Overcast",
                            "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
                            "code": 1009
                        },
```

## Wireframes
https://wireframe.cc/zOpyrU

### MVP/PostMVP

#### MVP 
- A working search function.
- API to get the information and pictures from.
- A media query for larger device to display the website differently.
- Using CSS to have different background colors.
- Eventlisteners for the submit search.

#### PostMVP  
- A hamburger menu.
- Top Cities API.
- Nav Bar.
- Anchor links to direct to a new webite.
- Icon/Image for weather 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|May 14-16| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|May 17| Project Approval / Pseudocode / | Complete
|May 18| Actual code / Working API  | Complete
|May 19| Eventlisteners / CSS  | Complete
|May 20| MVP / Advanced CSS | Complete
|May 21| Presentations | Complete

## Priority Matrix

https://app.conceptboard.com/board/m0m0-xu1e-d934-qkdf-3pgp

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Pseudocode | H | 1hrs| 1hr | 2hrs |
| Html structure | H | 3hrs| 3hr | 2hrs |
| CSS structure | H | 3hrs| 3hrs | 3hrs |
| Adding Form | H | 3hrs| 3hrs | 2hrs |
| City API callback function | H | 3hrs| 3hrs | 4hrs |
| Weather API callback function | H | 3hrs| 3hrs | 4hrs |
| Eventlisteners/RemoveChild()| H | 3hrs| 3hrs | 3hrs |
| CSS styling for main page| H | 3hrs| 3hrs | 5hrs |
| layout for larger device  | H | 3hrs| 3hrs | 1hrs |
| CSS styling for larger device | H | 3hrs| 3hrs | 2hrs |
| MVP check/fixes/tweaks| H | 3hrs| 3hrs | 4hrs |
| PostMVP checks/fixes/tweaks| H | 3hrs| 3hrs | 4hrs |
| Adding a extra card | H | 3hrs| 3hrs | 2hrs |
| Total | H | 37hrs| 37hrs | 38hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function removeCity(removingCity) {
  while (removingCity.lastChild) {
    removingCity.removeChild(locationName.lastChild)
  }
}
```

## Change Log
 - Styling of the page changed.
 - Didn't do a second card.
 - Only used one API instead of two.
