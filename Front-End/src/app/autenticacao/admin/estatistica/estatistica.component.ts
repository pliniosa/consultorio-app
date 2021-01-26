import { Component, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, Chart } from 'chart.js';
import * as pluguinDataLabels from 'chart.js'
import { Label } from 'ng2-charts';
import { Agenda } from '../../models/agenda'
import { AgendaService } from '../../service/agenda/agenda.service';
import { timeout, timeoutWith } from 'rxjs/operators';


@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.css']
})
export class EstatisticaComponent implements OnInit {

  agendaGet = {} as Agenda;
  agenda: Agenda[];

  jan = [];
  fev = [];
  mar = [];
  abr = [];
  mai = [];
  jun = [];
  jul = [];
  ago = [];
  set = [];
  out = [];
  nov = [];
  dez = [];

  constructor(
    private agendaService: AgendaService
    ) { }

  ngOnInit() {
    this.getContador();
    
  }
  
  ngAfterViewInit(){
    var myChart = new Chart("myChart",{
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets:[{
          label: 'Estatistica',
          data: [this.jan.length, this.fev,length, this.mar.length, this.abr.length, this.mai.length, this.jun.length, this.jul.length, this.ago.length, this.set.length, this.out.length, this.nov.length, this.dez.length],
          backgroundColor:[
            'rgba(255,99,132,0.2)'
          ],
          borderWidth: 1
        }]
      },
      options:{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
  })
  }

  getContador() {
    this.agendaService.getAgendaTodos().subscribe((agenda: Agenda[]) => {

      let data = agenda.map(agenda => agenda.data);
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 1) {
          this.jan.push(data);
        }
      }
      this.jan = [...this.jan];
      console.log(this.jan); // 7 correto
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 2) {
          this.fev.push(data);
        }
      }
      this.fev = [...this.fev];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 3) {
          this.mar.push(data);
        }
      }
      this.mar = [...this.mar];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 4) {
          this.abr.push(data);
        }
      }
      this.abr = [...this.abr];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 5) {
          this.mai.push(data);
        }
      }
      this.mai = [...this.mai];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 6) {
          this.jun.push(data);
        }
      }
      this.jun = [...this.jun];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 7) {
          this.jul.push(data);
        }
      }
      this.jul = [...this.jul];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 8) {
          this.ago.push(data);
        }
      }
      this.ago = [...this.ago];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 9) {
          this.set.push(data);
        }
      }
      this.set = [...this.set];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 1 && aux[6] == 0) {
          this.out.push(data);
        }
      }
      this.out = [...this.out];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 1 && aux[6] == 1) {
          this.nov.push(data);
        }
      }
      this.nov = [...this.nov];
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 1 && aux[6] == 2) {
          this.dez.push(data);
        }
      }
      this.dez = [...this.dez];
      console.log(this.jan); // 7 correto
    });
    console.log(this.jan); // 0 errado
  }
}