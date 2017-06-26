import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registraractaentrega',
  templateUrl: './registraractaentrega.component.html',
  styleUrls: ['./registraractaentrega.component.css']
})
export class RegistraractaentregaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //jala estados de la BD
  estados = [
    'Bueno',
    'Regular',
    'Malo'
  ]

  //BD - COMPARTIDO CON OTRAS BOLETAS
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


  //BD - COMPARTIDO CON OTRAS BOLETAS
  oficios = [
    {
      codigo: 'N° 005-2017-MP-FN-DFLS-OAV',
      descripcion: 'oficio1'
    },
    {
      codigo: 'N° 015-2017-MP-FN-DFLS-OAV',
      descripcion: 'oficio2'
    },
    {
      codigo: 'N° 018-2017-MP-FN-DFLS-OAV',
      descripcion: 'oficio3'
    }
  ]

  //definir quienes puede solicitar materiales de AV
  //resuelto: fiscales

  //BD - COMPARTIDO CON OTRAS BOLETAS
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
      cargo: 'Fiscal Supremo'
    }
  ]

  tipoMaterial = [
    'Laptop',
    'Proyector',
    'Micrófono'
  ]

  //BD - COMPARTIDO CON OTRAS BOLETAS habiendo filtrado los equipos existentes en inventario
  materiales = [
    {
      idItem: '00001',
      nombreItem: 'Laptop x',
      tipoItem: 'Laptop',
      estado: 'Bueno',
    },
    {
      idItem: '00002',
      nombreItem: 'Proyector x',
      tipoItem: 'Proyector',
      estado: 'Bueno',
    },
    {
      idItem: '00003',
      nombreItem: 'Laptop y',
      tipoItem: 'Laptop',
      estado: 'Bueno',
    },
    {
      idItem: '00004',
      nombreItem: 'Laptop z',
      tipoItem: 'Laptop',
      estado: 'Medio',
    },
    {
      idItem: '00005',
      nombreItem: 'Proyector y',
      tipoItem: 'Proyector',
      estado: 'Malo',
    },
    {
      idItem: '00006',
      nombreItem: 'Proyector z',
      tipoItem: 'Proyector',
      estado: 'Malo',
    },
    {
      idItem: '00007',
      nombreItem: 'Micrófono x',
      tipoItem: 'Micrófono',
      estado: 'Bueno',
    },
    {
      idItem: '00008',
      nombreItem: 'Micrófono y',
      tipoItem: 'Micrófono',
      estado: 'Medio',
    },
    {
      idItem: '00009',
      nombreItem: 'Micrófono z',
      tipoItem: 'Micrófono',
      estado: 'Malo',
    }
  ]






  /*
  PARA EL FUNCIONAMIENTO DE LOS MODAL
  */
  //PARA EL MODAL BUSCAR FISCALIA

  //debe buscar en bd con una funcion al hacer click 
  selectedRowFiscalia : number;
  selectedFiscalia = []
  setClickedRowFiscalia = function(index){
    this.selectedRowFiscalia = index;
  }
  setDataFiscalia = function(e1 : any){
    this.selectedFiscalia = ''
    this.selectedFiscalia = e1
  }
  borrarSelectedFiscalia = function(){
    this.selectedFiscalia = ''
  }


  //PARA EL MODAL BUSCAR OFICIO
  selectedRowOficio : number;
  selectedOficio = []
  setClickedRowOficio = function(index){
    this.selectedRowOficio = index;
  }
  setDataOficio = function(e1 : any){
    this.selectedOficio = ''
    this.selectedOficio = e1
  }
  borrarSelectedOficio = function(){
    this.selectedOficio = ''
  }

  //PARA EL MODAL BUSCAR FISCAL
  selectedRowFiscal : number;
  selectedFiscal = []
  setClickedRowFiscal = function(index){
    this.selectedRowFiscal = index;
  }
  setDataFiscal = function(e1 : any){
    this.selectedFiscal = ''
    this.selectedFiscal = e1
  }
  borrarSelectedFiscal = function(){
    this.selectedFiscal = ''
  }

  //PARA EL MODAL BUSCAR MATERIAL
  selectedRowMaterial : number;
  selectedMaterial = []
  setClickedRowMaterial = function(index){
    this.selectedRowMaterial = index;
  }
  setDataMaterial = function(e1 : any){
    this.selectedMaterial = ''
    this.selectedMaterial = e1
  }
  borrarSelectedMaterial = function(){
    this.selectedMaterial = ''
  }




  //DATOS DE LA TABLA
  arregloSerializado = ''
  filas = [
  ]

  //agregar material seleccionado a la tabla

  agregarSelectedMaterial = function(){
    this.filas.push(
      [
        this.selectedMaterial.idItem,
        this.selectedMaterial.nombreItem,
        this.selectedMaterial.tipoItem,
        this.selectedMaterial.estado
      ]
    )
    this.arregloSerializado = JSON.stringify(this.filas)    
  }

  borrarUltimaFila = function() {
    this.filas.splice(-1,1)
    this.arregloSerializado = JSON.stringify(this.filas)
  }

  borrarFila = function(obj) {
    var index = this.filas.indexOf(obj)
    this.filas.splice(index, 1)
    this.arregloSerializado = JSON.stringify(this.filas) 
  }


  //DATOS DE LOS CAMPOS - de todo el form

  temporal = []
  datosSerializados = ''
  
  insertarDatos = function(e1 : string, e2 : string, e3 : string, e4 : string, e5 : string, e6 : string, e7 : string, e8 : string, e9 : string, e10 : string, e11 : string, e12 : string, e13 : string, e14 : string, e15 : string, e16 : string, e17 : string){
    this.temporal.push([e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17])
    this.datosSerializados = JSON.stringify(this.temporal)

  }


}
