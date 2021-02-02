import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Agenda } from '../../models/agenda'
import { AgendaService } from '../../service/agenda/agenda.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'

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

  @ViewChild('divChart') content: ElementRef;

  public gerarPDF(){
    var data = document.getElementById('divChart');  
    html2canvas(data).then(canvas => {  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('l', 'mm', 'a4'); // A4 size page of PDF  

      pdf.addImage(contentDataURL, 'PNG', 20, 15, 250, 120)
      pdf.save('estatistica.pdf'); // Generated PDF   
    }); 
  }

  async ngOnInit() {
    await this.getContador();
    
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Estatistica',
          data: [this.jan.length, this.fev.length, this.mar.length, this.abr.length, this.mai.length, this.jun.length, this.jul.length, this.ago.length, this.set.length, this.out.length, this.nov.length, this.dez.length],
          backgroundColor: [
            'rgba(13,99,255,0.2)',
            'rgba(233,99,233,0.2)',
            'rgba(57,99,211,0.2)',
            'rgba(189,99,189,0.2)',
            'rgba(101,99,167,0.2)',
            'rgba(145,99,145,0.2)',
            'rgba(101,99,123,0.2)',
            'rgba(123,99,101,0.2)',
            'rgba(79,99,79,0.2)',
            'rgba(211,99,57,0.2)',
            'rgba(35,99,35,0.2)',
            'rgba(255,99,13,0.2)',
          ],
          borderWidth: 1
        }]
      },
      options: {
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

  async getContador() {
    await this.agendaService.getContador().then((agenda: Agenda[]) => {

      let data = agenda.map(agenda => agenda.data);
      
      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 1) {
          this.jan.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 2) {
          this.fev.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 3) {
          this.mar.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 4) {
          this.abr.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 5) {
          this.mai.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 6) {
          this.jun.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 7) {
          this.jul.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 8) {
          this.ago.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 0 && aux[6] == 9) {
          this.set.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 1 && aux[6] == 0) {
          this.out.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 1 && aux[6] == 1) {
          this.nov.push(data);
        }
      }

      for (let i = 0; i < data.length; i++) {
        let aux = data[i];
        if (aux[5] == 1 && aux[6] == 2) {
          this.dez.push(data);
        }
      }
    });
  }
}