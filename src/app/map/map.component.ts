import {Component, OnInit} from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import * as China from "../../assets/js/China"
import * as Anhui from "../../assets/js/Anhui"
import * as Beijing from "../../assets/js/Beijing"
import * as Chongqing from "../../assets/js/Chongqing"
import * as Fujian from "../../assets/js/Fujian"
import * as Gansu from "../../assets/js/Gansu"
import * as Guangdong from "../../assets/js/Guangdong"
import * as Guangxi from "../../assets/js/Guangxi"
import * as Guizhou from "../../assets/js/Guizhou"
import * as Hainan from "../../assets/js/Hainan"
import * as Hebei from "../../assets/js/Hebei"
import * as Heilongjiang from "../../assets/js/Heilongjiang"
import * as Henan from "../../assets/js/Henan"
import * as Hubei from "../../assets/js/Hubei"
import * as Hunan from "../../assets/js/Hunan"
import * as Jiangsu from "../../assets/js/Jiangsu"
import * as Jiangxi from "../../assets/js/Jiangxi"
import * as Jilin from "../../assets/js/Jilin"
import * as Liaoning from "../../assets/js/Liaoning"
import * as Neimenggu from "../../assets/js/Neimenggu"
import * as Ningxia from "../../assets/js/Ningxia"
import * as Qinghai from "../../assets/js/Qinghai"
import * as Shandong from "../../assets/js/Shandong"
import * as Shanghai from "../../assets/js/Shanghai"
import * as Shanx from "../../assets/js/Shanx"
import * as Shanxi from "../../assets/js/Shanxi"
import * as Sichuan from "../../assets/js/Sichuan"
import * as Taiwan from "../../assets/js/Taiwan"
import * as Tianjin from "../../assets/js/Tianjin"
import * as Xinjiang from "../../assets/js/Xinjiang"
import * as Xizang from "../../assets/js/Xizang"
import * as Yunnan from "../../assets/js/Yunnan"
import * as Zhejiang from "../../assets/js/Zhejiang"

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    NgxEchartsModule
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{
  ngOnInit() {
    China.init()
    Beijing.init()
    Tianjin.init()
    Hebei.init()
    Shanxi.init()
    Neimenggu.init()
    Liaoning.init()
    Jilin.init()
    Heilongjiang.init()
    Shanghai.init()
    Jiangsu.init()
    Zhejiang.init()
    Anhui.init()
    Fujian.init()
    Jiangxi.init()
    Shandong.init()
    Henan.init()
    Hubei.init()
    Hunan.init()
    Guangdong.init()
    Guangxi.init()
    Hainan.init()
    Chongqing.init()
    Sichuan.init()
    Guizhou.init()
    Yunnan.init()
    Xizang.init()
    Shanx.init()
    Gansu.init()
    Qinghai.init()
    Ningxia.init()
    Xinjiang.init()
    Fujian.init()
    Taiwan.init()
    this.initChart();
  }
  initChart() {
    const chartDom= document.getElementById('chinaMap');
    const myChart= echarts.init(chartDom);
    let option;
    option = {
      title : {
      },
      tooltip: {},
      legend: {
      },
      geo: {
        map: 'china',
        show: true,
        roam:false,
        zoom:1,
        emphasis:{
          label:{
            show:false
          }
        },
        itemStyle: {
          areaColor: '#FFDAB9',
          borderColor: '#FFE4E1',
          shadowColor: '#FF6A6A',
          shadowBlur: 10
        }
      },
      series: [
      ]
    };

    myChart.on('click',function(param){
      console.log(param);
      myChart.setOption( {
        title : {
        },
        tooltip: {},
        legend: {
        },
        geo: {
          map: param.name,
          show: true,
          roam:false,
          zoom:1,
          emphasis:{
            label:{
              show:false
            }
          },
          itemStyle: {
            areaColor: '#FFDAB9',
            borderColor: '#FFE4E1',
            shadowColor: '#FF6A6A',
            shadowBlur: 10
          }
        },
        series: [
        ]
      })
    })
    option && myChart.setOption(option);
  }
}
