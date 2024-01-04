import { Component, Input, OnInit } from '@angular/core';
import { CitySearchService } from "../../services/city-search.service";
import { CityInfo } from "../../models/city-info.model";
import { WeatherInfo } from "../../models/weather-info.model";
import { WeatherSearchService } from "../../services/weather-search.service";

@Component({
    selector: 'app-block2',
    standalone: true,
    imports: [],
    templateUrl: './block2.component.html',
    styleUrl: './block2.component.scss'
})
export class Block2Component implements OnInit {
    constructor(private citySearchService: CitySearchService,
                private weatherSearchService: WeatherSearchService) {
    }

    ngOnInit(): void {
    }

    @Input() adm?: string;
    @Input() city?: string;

    // 城市信息
    cityInfo: CityInfo = {
        code: '',
        location: [{
            id: '',
            name: '',
            adm1: '',
            adm2: '',
            country: '',
            tz: '',
            utcOffset: '',
            isDst: '',
            type: '',
            rank: '',
            fxLink: ''
        }],
        refer: {
            sources: [''],
            license: ['']
        }
    }

    // 天气信息
    weatherInfo: WeatherInfo = {
        code: '',
        updateTime: '',
        fxLink: '',
        now: {
            obsTime: '',
            temp: '',
            feelsLike: '',
            icon: '',
            text: '',
            wind360: '',
            windDir: '',
            windScale: '',
            windSpeed: '',
            humidity: '',
            precip: '',
            pressure: '',
            vis: '',
            cloud: '',
            dew: ''
        },
        refer: {
            sources: [''],
            license: ['']
        }
    }

    searchWeather(city: string | undefined, adm: string | undefined, date: string | undefined): void {
        this.citySearchService.getCity(city, adm)
            .subscribe(cityInfo => {
                this.cityInfo = cityInfo;
                this.weatherSearchService.getWeather(this.cityInfo.location[0].id, date)
                    .subscribe(weatherInfo => {
                        this.weatherInfo = weatherInfo;
                    })
            })
    }

}
