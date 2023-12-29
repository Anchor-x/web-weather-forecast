import {Component, OnInit} from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import * as Chongqing from "../../assets/js/Chongqing"
import * as China from "../../assets/js/China"
import * as Henan from "../../assets/js/Henan"

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
      if(param.name=='重庆市') {

        Chongqing.init();
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
      }
      if(param.name=='河南省') {
        Henan.init()
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
      }
    })
    option && myChart.setOption(option);
  }
}
