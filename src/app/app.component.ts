import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from "./components/map/map.component";
import { BlockComponent } from "./components/block/block.component";
import { WeatherSearchComponent } from "./components/weather-search/weather-search.component";
import { Block2Component } from "./components/block2/block2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, MapComponent, WeatherSearchComponent, BlockComponent, Block2Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'web-weather-forecast';
    adm: string = '';
    city: string = 'Weather';

    setAdm(str: string) {
        this.adm = str;
    }

    setCity(str: string) {
        this.city = str;
    }
}
