import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarsalidabien',
  templateUrl: './registrarsalidabien.component.html',
  styleUrls: ['./registrarsalidabien.component.css']
})
export class RegistrarsalidabienComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columnas = [
    'N°', 
    'CANT', 
    'EMBALAJE', 
    'DESCRIPCIÓN DEL BIEN DE TRASLADO', 
    'ESTADO',
    '-'
  ];

 filas = []
  insertar = function(c1 : String, c2 : String, c3 : String, c4 : String, c5 : String){
    this.filas.push(
      [c1,c2,c3,c4,c5]
    )
  } 
 
   eliminar = function(){
    this.filas.splice(-1,1);
  }

  eliminarFila = function(obj){
    var index = this.filas.indexOf(obj)
     this.filas.splice(index,1);
     
  }


  //BD - COMPARTIDO CON OTRAS BOLETAS
  fiscalias = [
    {
      codigo: 'F.E.D.C.F.D.F.L.S.',
      descripcion: 'Fiscalia e... D.... c....',
    },
    
    {
      codigo: 'fiscalia 2',
      descripcion: 'Fiscalia 2 descripcion',
    },

    {
      codigo: 'fiscalia 3',
      descripcion: 'fiscalia 3 descripcion',
    }
  ]

  //LO JALA DE LA BD - COMPARTIDO CON OTRAS BOLETAS
  oficiosTraslado = [
    {
      codigo: 'Ofi Tras 1',
      numOficio: '123'
    },
    {
      codigo: 'Ofi Tras 2',
      numOficio: '456'
    },
    {
      codigo: 'Ofi Tras 3',
      numOficio: '789'
    }
  ]

  //BD - COMPARTIDO CON OTRAS BOLETAS
  fiscales = [
    {
      nombre: 'Sujeto 1',
      cargo: 'Fiscal Provincial'
    },
    {
      nombre: 'Sujeto 2',
      cargo: 'Fiscal Regional'
    },
    {
      nombre: 'Sujeto 3',
      cargo: 'Fiscal Supremo'
    }
  ]
  
  //BD - COMPARTIDO CON OTRAS BOLETAS
  trabajadores = [
    {
      nombre: 'jaime',
      cargo: 'trabajador1',
      dni: '12346889'
    },

    {
      nombre: 'giancarlo',
      cargo: 'trabajador2',
      dni: '1234688648654'
    }
  ]

  carpetasFiscales = [
    {
      codigo: 'carpeta fiscal 1111111111111',
      descripcion: 'aaaaaaaaaa'
    },
    {
      codigo: 'carpeta fiscal 222222222222',
      descripcion: 'bbbbbbbbbbb'
    },
    {
      codigo: 'carpeta fiscal 33333333333',
      descripcion: 'ccccccccccccccc'
    }
  ]
  
  //PARA EL MODAL BUSCAR FISCALIA
  selectedRowFiscalia : number;
  selectedFiscalia = []
  setClickedRowFiscalia = function(index){
    this.selectedRowFiscalia = index;
  }
  
  setDataFiscalia = function(e1 : any){
    this.selectedFiscalia = ''
    this.selectedFiscalia = e1
  }


  //PARA EL MODAL BUSCAR OFICIO TRASLADO
  selectedRowOficioTraslado : number;
  selectedOficioTraslado = []
  setClickedRowOficioTraslado = function(index){
    this.selectedRowOficioTraslado = index;
  }

  setDataOficioTraslado =function(e1 : any){
    this.selectedOficioTraslado = ''
    this.selectedOficioTraslado = e1
  }


  //PARA EL MODAL DE FISCAL
  selectedRowFiscal : number;
  selectedFiscal = []
  setClickedRowFiscal = function(index){
    this.selectedRowFiscal = index;
  }

  setDataFiscal = function(e1 : any){
    this.selectedFiscal = ''
    this.selectedFiscal = e1
  }

  //PARA EL MODAL Trabajador
  selectedRowTrabajador : number
  selectedTrabajador = []
  setClickedRowTrabajador = function(index) {
    this.selectedTrabajador = index;
  }

  setDataTrabajador = function(e1 : any){
    this.selectedTrabajador = ''
    this.selectedTrabajador = e1
  }


  //PARA EL MODAL Trabajador
  selectedRowBI : number
  selectedBI = []
  setClickedRowBI = function(index) {
    this.selectedBI = index;
  }

  setDataBI = function(e1 : any){
    this.selectedBI = ''
    this.selectedBI = e1
  }

  //PARA EL MODAL BUSCAR CARPETA FISCAL
  selectedRowCarpetaFiscal : number;
  selectedCarpetaFiscal = []
  setClickedRowCarpetaFiscal = function(index){
    this.selectedRowCarpetaFiscal = index;
  }
  setDataCarpetaFiscal = function(e1 : any){
    this.selectedCarpetaFiscal = ''
    this.selectedCarpetaFiscal = e1
  }
  borrarSelectedCarpetaFiscal = function(){
    this.selectedCarpetaFiscal = ''
  }

//Buttons
  borrarSelectedTrabajadorEntregado = function(){
      this.selectedTrabajadorEntregado = ''
    }



  temporal = []
  datosSerializados = ''
  
  insertarDatos = function(e1 : string, e2 : string, e3 : string, e4 : string, e5 : string, e6 : string, e7 : string, e8 : string, e9 : string, e10 : string, e11 : string, e12 : string, e13 : string, e14 : string, e15 : string, e16 : string, e17 : string){
    this.temporal.push([e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17])
    this.datosSerializados = JSON.stringify(this.temporal)
  }


}
