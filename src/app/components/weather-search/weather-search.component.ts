import { Component, OnInit } from '@angular/core';
import { CitySearchService } from "../../services/city-search.service";

@Component({
    selector: 'app-weather-search',
    standalone: true,
    imports: [],
    templateUrl: './weather-search.component.html',
    styleUrl: './weather-search.component.scss'
})
export class WeatherSearchComponent implements OnInit {
    CountyId: string = '';

    ngOnInit(): void {
    }

    constructor(private service: CitySearchService) {
    }

    // Get the county id from the service
    // getCountyId(city: string, adm: string, county: string): void {
    //     this.CountyId = this.service.getCountyId(city, adm, county);
    // }
}
