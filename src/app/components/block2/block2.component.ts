import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";

@Component({
    selector: 'app-block2',
    standalone: true,
    imports: [],
    templateUrl: './block2.component.html',
    styleUrl: './block2.component.scss'
})
export class Block2Component implements OnInit {

    @Input() adm?: string;
    @Input() city?: string;

    ngOnInit(): void {
    }

    /**
     * 构造函数
     * @param httpService - HTTP服务
     */
    constructor(protected httpService: HttpService) {
    }
}
