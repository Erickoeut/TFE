import { Controller, Get, Param } from "@nestjs/common";
import { WeatherService } from "./weather.service";

@Controller('api/weather')
export class WeatherController{
    constructor(private readonly weatherServe:WeatherService){}

    @Get(":city")
    async getWeather(
        @Param("city") city:string
    ):Promise<any>{
        return await this.weatherServe.getWeather(city)
    }
}