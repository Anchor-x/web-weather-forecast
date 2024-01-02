import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityInfo } from "../models/city-info.model";

@Injectable({
    providedIn: 'root'
})

export class CitySearchService {
    // API key
    // TODO 加密处理
    key: string = '2ee1e65015a040d5b8eb991a4b09db35';
    // API
    api: string = 'https://geoapi.qweather.com/v2/city/lookup';

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

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    /**
     * 获取城市列表
     * @param {string} city - 城市名称
     * @param {string} adm - 行政区划代码
     * */
    getCity(city: string, adm: string): void {
        // 请求地址
        const url = `${this.api}?location=${city}&adm=${adm}&key=${this.key}`;
        this.http.get(url).subscribe((data: any) => {
            this.cityInfo = data;
        });
    }

    /**
     * 获取县级行政区Id
     * @param city - 城市名称
     * @param adm - 行政区划代码
     * @param county - 县级行政区名称
     */
    getCountyId(city: string, adm: string, county: string): string {
        this.getCity(city, adm);
        let CountyId: string = '';
        this.cityInfo.location.forEach((item: any): any => {
            if (item.name == county) {
                CountyId = item.id;
            }
        })
        return CountyId;
    }

    /**
     * 处理http请求错误
     * @param error - 错误信息
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
