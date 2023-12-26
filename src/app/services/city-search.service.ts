import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CityInfo } from "../models/city-info.model";

@Injectable({
    providedIn: 'root'
})

//TODO 未进行测试
export class CitySearchService {
    // API key
    key: string = '';
    // API
    api: string = 'https://geoapi.qweather.com/v2/city/lookup';

    constructor(private http: HttpClient,
                private cityInfo: CityInfo) {
    }

    ngOnInit(): void {
    }

    /*
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

    //TODO 错误处理部分未完成
    //获取县级行政区Id
    getCountyId(county: string): string {
        let CountyId: string = '';
        this.cityInfo.location.forEach((item: any) => {
            if (item.name === county) {
                CountyId = item.id;
            } else {
                console.error('未找到该县级行政区');
            }
        })
        return CountyId;
    }

}
