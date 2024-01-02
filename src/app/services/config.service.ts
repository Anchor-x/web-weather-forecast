import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    // API key
    // TODO 加密处理
    public static key: string = '2ee1e65015a040d5b8eb991a4b09db35';

    // 预报日期
    Date: string[] = [
        'now', '3d', '7d', '10d', '15d', '30d'
    ]

    constructor() {
    }

}
