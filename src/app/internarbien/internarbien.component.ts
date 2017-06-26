import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internarbien',
  templateUrl: './internarbien.component.html',
  styleUrls: ['./internarbien.component.css']
})
export class InternarbienComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Ministerio Público';
  usuarioSesion = 'Jaime Pirca'
  columnas = [
    'Item',
    'Cantidad',
    'Embajale',
    'Elemento Material, Evidencia y/o Bienes Incautados (Descripción)',
    'Estado de Conservación',
    'Codigo de Embajale',
    '-'
  ]

  delitos = [
    'Delito Genérico',
    'Delito SubGenérico',
    'Delito Específico',
     '-']
  
  agraviados = [
    'Nombre Completo Agraviado(s)',
    'DNI',
    'Edad',
    '-'
  ]

  autores = [
    'Nombre Completo de Presunto Autor(es)',
    'DNI',
    'Edad',
    '-'
  ]
  
  //jala estados de la BD
  estados = [
    'Bueno',
    'Regular',
    'Malo'
  ]



  //Delito Generico
  delitoGenerico = [
    {
      codigoDelitoGen: 'DG1',
      descripcionDelitoGen: 'delitoGenerico1',
      delitoSubgenerico: ['delSub1', 'delSub2', 'delSub3']
    },
    {
      codigoDelitoGen: 'DG2',
      descripcionDelitoGen: 'delitoGenerico2',
      delitoSubgenerico: ['delSub4', 'delSub5', 'delSub6']
    }
  ]

  //Delito Subgenerico
  delitoSubgenerico = [
    {
      codigoSubgenerico: 'delSub1',
      delitoEspecifico: ['delEsp1', 'delEsp2', 'delEsp3']
    },
    {
      codigoSubgenerico: 'delSub2',
      delitoEspecifico: ['delEsp4', 'delEsp5', 'delEsp6']
    },
    {
      codigoSubgenerico: 'delSub3',
      delitoEspecifico: ['delEsp7', 'delEsp8', 'delEsp9']
    }
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

  //BD - COMPARTIDO CON OTRAS BOLETAS
  oficios = [
    {
      codigo: 'oficio 11111111',
      descripcion: 'oficio1'
    },
    {
      codigo: 'oficio 222222222',
      descripcion: 'oficio2'
    },
    {
      codigo: 'oficio 33333333',
      descripcion: 'oficio3'
    }
  ]

  //BD - COMPARTIDO CON OTRAS BOLETAS
  trabajadores = [
    {
      codigo: '000001',
      nombre: 'Trabajador Uno 1',
      cargo: 'Analista',
      dni: '1234567'
    },
    {
      codigo: '000002',
      nombre: 'Trabajador Dos 2',
      cargo: 'Asist. Adm.',
      dni: '7654321'
    },
    {
      codigo: '000003',
      nombre: 'Trabajador Tres 3',
      cargo: 'Analista',
      dni: '6712345'
    },
    {
      codigo: '000004',
      nombre: 'Trabajador Cuatro 4',
      cargo: 'Asist. Fun. Fiscal',
      dni: '4523716'
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

  //PARA EL MODAL DE DELITOS
  selectedRowDelito : number;
  selectedDelito = []
  setClickedRowDelito = function(index){
    this.selectedRowDelito = index;
  }
  setDataDelito = function(e1 : any){
    this.selectedDelito = ''
    this.selectedDelito = e1
  }
  borrarSelectedDelito = function(){
    this.selectedDelito = ''
  }

  //PARA DELITO SUBGENERICO
  selectedRowDelitoSub : number;
  selectedDelitoSub = []
  setClickedRowDelitoSub = function(index){
    this.selectedRowDelitoSub = index;
  }
  setDataDelitoSub = function(e1 : any){
    this.selectedDelitoSub = ''
    this.selectedDelitoSub = e1
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


  //PARA EL MODAL BUSCAR TRABAJADOR ENTREGADO POR
  selectedRowTrabajadorEntregado : number;
  selectedTrabajadorEntregado = []
  setClickedRowTrabajadorEntregado = function(index){
    this.selectedRowTrabajadorEntregado = index;
  }
  setDataTrabajadorEntregado = function(e1 : any){
    this.selectedTrabajadorEntregado = ''
    this.selectedTrabajadorEntregado = e1
  }
  borrarSelectedTrabajadorEntregado = function(){
    this.selectedTrabajadorEntregado = ''
  }


  //PARA EL MODAL BUSCAR TRABAJADOR RECIBIDO POR
  selectedRowTrabajadorRecibido : number;
  selectedTrabajadorRecibido = []
  setClickedRowTrabajadorRecibido = function(index){
    this.selectedRowTrabajadorRecibido = index;
  }
  setDataTrabajadorRecibido = function(e1 : any){
    this.selectedTrabajadorRecibido = ''
    this.selectedTrabajadorRecibido = e1
  }
  borrarSelectedTrabajadorRecibido = function(){
    this.selectedTrabajadorRecibido = ''
  }



  
  //DATOS DE LA TABLA
  arregloSerializado = ''
  filas = [
  ]

  insertarFila = function(e1 : string, e2: string,e3 : string, e4: string,e5 : string, e6: string) {
    this.filas.push(
      [
        e1,
        e2,
        e3,
        e4,
        e5,
        e6        
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

//DELITOS
  delit = []

  insertarDelito = function(e1 : string, e2: string,e3 : string) {
    this.delit.push(
      [
        e1,
        e2,
        e3
               
      ]
    )
    this.arregloSerializado = JSON.stringify(this.delit)    
  }

  borrarUltimoDelito = function() {
    this.delit.splice(-1,1)
    this.arregloSerializado = JSON.stringify(this.delit)
  }

  borrarDelito = function(obj) {
    var index = this.delit.indexOf(obj)
    this.delit.splice(index, 1)
    this.arregloSerializado = JSON.stringify(this.delit) 
  }

  //AGRAVIADOS
  agrav = []

  insertarAgraviado = function(e1 : string, e2: string,e3 : string) {
    this.agrav.push(
      [
        e1,
        e2,
        e3
               
      ]
    )
    this.arregloSerializado = JSON.stringify(this.agrav)    
  }

  borrarUltimoAgraviado = function() {
    this.agrav.splice(-1,1)
    this.arregloSerializado = JSON.stringify(this.agrav)
  }

  borrarAgraviado = function(obj) {
    var index = this.agrav.indexOf(obj)
    this.agrav.splice(index, 1)
    this.arregloSerializado = JSON.stringify(this.agrav) 
  }

  //PRESUNTO AUTOR
  aut = []

  insertarPreAutor = function(e1 : string, e2: string,e3 : string) {
    this.aut.push(
      [ 
        e1,
        e2,
        e3
               
      ]
    )
    this.arregloSerializado = JSON.stringify(this.aut)    
  }

  borrarUltimoAutor = function() {
    this.aut.splice(-1,1)
    this.arregloSerializado = JSON.stringify(this.aut)
  }

  borrarAutor = function(obj) {
    var index = this.delit.indexOf(obj)
    this.aut.splice(index, 1)
    this.arregloSerializado = JSON.stringify(this.aut) 
  }

  //DATOS DE LOS CAMPOS - de todo el form

  temporal = []
  datosSerializados = ''
  
  insertarDatos = function(e1 : string, e2 : string, e3 : string, e4 : string, e5 : string, e6 : string, e7 : string, e8 : string, e9 : string, e10 : string, e11 : string, e12 : string, e13 : string, e14 : string, e15 : string, e16 : string, e17 : string){
    this.temporal.push([e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17])
    this.datosSerializados = JSON.stringify(this.temporal)

  }
  









}
