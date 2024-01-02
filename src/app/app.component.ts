import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from "./map/map.component";
import { BlockComponent } from "./block/block.component";
import { WeatherSearchComponent } from "./components/weather-search/weather-search.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, MapComponent, WeatherSearchComponent, BlockComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'web-weather-forecast';
}
