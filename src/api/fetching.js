export default function fetching(city){
    BaseURL =  `http://api.weatherapi.com/v1/current.json?key=053c018326544c0bb31145348231209&q=${city}aqi=no`
    return BaseURL
}

