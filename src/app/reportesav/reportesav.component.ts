import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportesav',
  templateUrl: './reportesav.component.html',
  styleUrls: ['./reportesav.component.css']
})
export class ReportesavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  criterios1=[
    {
      idcriterio1: 1,
      nombrecriterio1: 'Por Fiscal'
    },
    {
      idcriterio1: 2,
      nombrecriterio1: 'Por Fiscalia'
    },
    {
      idcriterio1: 3,
      nombrecriterio1: 'Por Tipo Archivo Recibido'
    }    
  ]

  criterios2=[
    {
      idcriterio2: 1,
      nombrecriterio1: 'Por Año'
    },
    {
      idcriterio2: 2,
      nombrecriterio1: 'Por Trimestre'
    },
    {
      idcriterio2: 3,
      nombrecriterio1: 'Por Mes'
    }    
  ]




  fiscales = [
    {
      nombre: 'Sujeto de prueba 1',
      cargo: 'Fiscal Provincial'
    },
    {
      nombre: 'Sujeto de prueba 2',
      cargo: 'Fiscal Regional'
    },
    {
      nombre: 'Sujeto de prueba 3',
      cargo: 'Fiscal Coordinador'
    },
    {
      nombre: 'Sujeto de prueba 4',
      cargo: 'Fiscal Supremo'
    }
  ]

  fiscalias = [
    {
      codigo: 'F.E.D.C.F.D.F.L.S.',
      descripcion: 'Fiscalia e... D.... c....',
      despachos: ['Despacho1', 'Despacho2', 'Despacho3']
    },
    {
      codigo: 'fiscalia 2',
      descripcion: 'Fiscalia 2 descripcion',
      despachos: ['Despacho4', 'Despacho5', 'Despacho6']
    },
    {
      codigo: 'fiscalia 3',
      descripcion: 'fiscalia 3 descripcion',
      despachos: ['Despacho7', 'Despacho8', 'Despacho9']
    }
  ]

  tipoArchivo = [
    {
      codigoTipo: 1,
      descripcionTipo: 'MP3'
    },
    {
      codigoTipo: 2,
      descripcionTipo: 'MP4'
    },
    {
      codigoTipo: 3,
      descripcionTipo: 'AVI'
    }
  ]

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];


  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions:any = {
    responsive: true
  };
  /*
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  */
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}
