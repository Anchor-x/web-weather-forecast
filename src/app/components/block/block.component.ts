import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service";

@Component({
    selector: 'app-block',
    standalone: true,
    imports: [],
    templateUrl: './block.component.html',
    styleUrl: './block.component.scss'
})
export class BlockComponent implements OnInit {
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
