import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-transcripcionaudiovideo',
  templateUrl: './transcripcionaudiovideo.component.html',
  styleUrls: ['./transcripcionaudiovideo.component.css']
})
export class TranscripcionaudiovideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


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

tiposAudio = [
    'MP3',
    'MP4',
    'AVI'
  ]

//DEFINIR CANTIDAD DE VOCES
vozMasculina = 0
vozFemenina = 0
arregloVoces = ''
voces = []
temp1 = 'VM'
temp2 = ''
temp3 = ''
agregarVM = function(){
  this.vozMasculina += 1
  this.temp2 = this.vozMasculina.toString()
  this.temp3 = this.temp1.concat(this.temp2)
  this.voces.push(
    this.temp3
  )
  //solo para mostrar.. 
  this.arregloVoces = JSON.stringify(this.voces)
  
}

quitarVM = function(){
  if(this.vozMasculina>0){
    var index = this.voces.indexOf(this.temp3)
    this.voces.splice(index, 1)
    this.vozMasculina -= 1
    this.temp2 = this.vozMasculina.toString()
    this.temp3 = this.temp1.concat(this.temp2)
    this.arregloVoces = JSON.stringify(this.voces) 

  }
}


temp4 = 'VF'
temp5 = ''
temp6 = ''
agregarVF = function(){
  this.vozFemenina += 1
  this.temp5 = this.vozFemenina.toString()
  this.temp6 = this.temp4.concat(this.temp5)
  this.voces.push(
    this.temp6
  )
  //solo para mostrar.. 
  this.arregloVoces = JSON.stringify(this.voces)
  
}

quitarVF = function(){
  if(this.vozFemenina>0){
/*      this.vozFemenina -= 1;
      this.voces.splice(-1,1)
      this.arregloVoces = JSON.stringify(this.voces)
*/
    var index = this.voces.indexOf(this.temp6)
    this.voces.splice(index, 1)
    this.vozFemenina -= 1
    this.temp5 = this.vozFemenina.toString()
    this.temp6 = this.temp1.concat(this.temp5)

    this.arregloVoces = JSON.stringify(this.voces)  
  }


}



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






//DATOS DE LA TABLA AV
  arregloSerializadoAV = ''
  filasAV = []

  insertarFilaAV = function(e1 : string, e2: string) {
    this.filasAV.push(
      [
        e1,
        e2     
      ]
    )
    this.arregloSerializadoAV = JSON.stringify(this.filasAV)    
  }

  borrarUltimaFilaAV = function() {
    this.filasAV.splice(-1,1)
    this.arregloSerializadoAV = JSON.stringify(this.filasAV)
  }

  borrarFilaAV = function(obj) {
    var index = this.filasAV.indexOf(obj)
    this.filasAV.splice(index, 1)
    this.arregloSerializadoAV = JSON.stringify(this.filasAV) 
  }







}
