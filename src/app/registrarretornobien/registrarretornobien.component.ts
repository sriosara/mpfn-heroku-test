import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarretornobien',
  templateUrl: './registrarretornobien.component.html',
  styleUrls: ['./registrarretornobien.component.css']
})
export class RegistrarretornobienComponent implements OnInit {

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
  setClickRowFiscal = function(index){
    this.selectedRowFiscal = index;
  }

  setDataFiscal = function(e1 : any){
    this.selectedFiscal = ''
    this.selectedFiscal = e1
  }

  //PARA EL MODAL Trabajador
  selectedRowTrabajador : number
  selectedTrabajador = []
  setClickRowTrabajador = function(index) {
    this.selectedTrabajador = index;
  }

  setDataTrabajador = function(e1 : any){
    this.selectedTrabajador = ''
    this.selectedTrabajador = e1
  }


}