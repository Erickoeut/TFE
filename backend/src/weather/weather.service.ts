import { Injectable, NotFoundException } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class WeatherService{
    async getWeather(city):Promise<any>{
        const params = {
            q: city, units: 'metric', lang: 'fr', appid: process.env.WEATHER_API_KEY
        }; 
        return await axios.get(`https://api.openweathermap.org/data/2.5/weather`,{params})
            .then(function ({data}) {
                console.log(data);
                
                return (
                    
                    {
                    skyMeteo: data.weather[0].description,
                    icon:  data.weather[0].icon,
                    temp:Math.round(data.main.temp*10)/10 ,
                    wind: data.wind.speed,
                    name: data.name,
                }
                )
            })
            .catch(() => { throw new NotFoundException("la ville recherchée n'existe pas") })
    }
}