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
      nombrecriterio2: 'Por Año'
    },
    {
      idcriterio2: 2,
      nombrecriterio2: 'Por Mes'
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

  tiposArchivo = [
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
    },
    {
      codigoTipo: 4,
      descripcionTipo: 'FLV'
    }
  ]


  criterioSeleccionado="Sin Elegir"
  fiscalesLabel = []
  fiscaliasLabel = []
  archivosLabel = []
  labels = []
  periodos = []
  fechaDesde = ""
  fechaHasta = ""
  //para verificar que cuente bien los fiscales
  //fiscalX = ''
  //cantFiscales = 0


  //newDate = new Date()
  newDate2 = ''
  fechaDesdeDesagregada = []
  fechaHastaDesagregada = []
  contMeses = 0
  anoDeste : number
  mesDesde : number
  anoHasta : number
  mesHasta : number
  difAno = 0
  temp : [number]
  tempCont = 0
  public lineChartData2:Array<any> = []
  public lineChartLabels2:Array<any> = []
  buscarDatos = function(e1 : any, e2 : any, e3 : any, e4 : any){
    this.criterioSeleccionado=e1
    this.fiscalesLabel = []
    this.fiscaliasLabel = []
    this.archivosLabel = []
    this.labels = []
    this.fechaDesde = e3
    this.fechaHasta = e4
    this.periodos = []

    // se debe conseguir en base la fecha de inicio y fin y el periodo
    // la cantidad de periodos. 
    // p.e. desde 01/01/2015 hasta 01/01/2017 en meses son 24 meses

    //this.newDate = new Date(e3)
    this.fechaDesdeDesagregada = this.fechaDesde.split("-") //posición 0 -> año, 1 -> mes. 2 -> día
    this.fechaHastaDesagregada = this.fechaHasta.split("-")
    this.contMeses = 0
    this.anoDesde = Number(this.fechaDesdeDesagregada[0])
    this.mesDesde = Number(this.fechaDesdeDesagregada[1])
    this.anoHasta = Number(this.fechaHastaDesagregada[0])
    this.mesHasta = Number(this.fechaHastaDesagregada[1])   
    this.difAno = this.anoHasta - this.anoDesde

    //cuando es por años.
    for (var j = this.anoDesde; j <= this.anoHasta; j++){
      this.periodos.push(
        j
      )
      this.lineChartLabels2.push(
        j.toString()
      )
    }


    if(e1=='Por Fiscal'){
      //this.cantFiscales = this.fiscales.length
      //this.fiscalX = this.cantFiscales.toString()
      for(var i=0; i < this.fiscales.length; i++){
        this.labels.push(
          // llena un array de nombres de fiscales
          this.fiscales[i].nombre
        )
      }
    } else if(e1=='Por Fiscalia'){
      for(var i=0; i < this.fiscalias.length; i++){
        this.labels.push(
          // llena un array de nombres de fiscalias
          this.fiscalias[i].codigo
        )
      }
    } else {
      for(var i=0; i < this.tiposArchivo.length; i++){
        this.labels.push(
          // llena un array de nombres de fiscales
          this.tiposArchivo[i].descripcionTipo
        )
      }
    }



    for (var i=0; i < this.labels.length; i++){
      this.temp = []
      for (var k=0; k < this.periodos.length; k++){
        this.tempCont += 1
        this.temp.push(
          this.tempCont
        )
      }

      this.lineChartData2.push(
        {
        data: this.temp,
        label: this.labels[i] 
        }
      )
    }


  }




  public lineChartData3:Array<any> = [

  ];
/*
    {data: [65, 59, 80, 81], label: 'Series A'},
    {data: [28, 48, 40, 19], label: 'Series B'},
    {data: [18, 48, 77, 9], label: 'Series C'}
*/

  public lineChartLabels3:Array<any> = [];
/*
'2013','2014','2015','2016'
*/




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
    let _lineChartData:Array<any> = new Array(this.lineChartData2.length);
    for (let i = 0; i < this.lineChartData2.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData2[i].data.length), label: this.lineChartData2[i].label};
      for (let j = 0; j < this.lineChartData2[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData2 = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}
