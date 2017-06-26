import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrardevolucion',
  templateUrl: './registrardevolucion.component.html',
  styleUrls: ['./registrardevolucion.component.css']
})
export class RegistrardevolucionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prestamos = [
    {
      idPrestamo: '0001-2017',
      idOficio: 'N° 005-2017-MP-FN-DFLS-OAV',
      idFiscalia: 'Fiscalia 1',
      despacho: 'Despacho 1',
      idFiscal: '04052255',
      nombreFiscal: 'Sujeto de prueba 1',
      motivo: 'Audiencia',
      fechaDevolucion: '31/12/2017 15:00'
    },
    {
      idPrestamo: '0002-2017',
      idOficio: 'N° 006-2017-MP-FN-DFLS-OAV',
      idFiscalia: 'Fiscalia 2',
      motivo: 'motivo 2',
      idFiscal: '04052255',
      nombreFiscal: 'Sujeto de prueba 2',
      despacho: 'Despacho 4',
      fechaDevolucion: '01/01/2018 15:00'
    },
    {
      idPrestamo: '0003-2017',
      idOficio: 'N° 007-2017-MP-FN-DFLS-OAV',
      idFiscalia: 'Fiscalia 1',
      despacho: 'Despacho 2',
      idFiscal: '04052255',
      nombreFiscal: 'Sujeto de prueba 3',
      motivo: 'motivo 3',
      fechaDevolucion: '31/12/2018 15:00'
    }
  ]

detallePrestamos = [
  {
    idPrestamo:'0001-2017',
    idItem:'1',
    nombreItem:'Laptop x',
    detallePrestamo: 'Esta laptop tiene un rasguño en el logo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0001-2017',
    idItem:'2',
    nombreItem:'Proyector x',
    detallePrestamo: 'Este proyector está casi nuevo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0001-2017',
    idItem:'3',
    nombreItem:'Cable Energía Laptop x',
    detallePrestamo: 'El cable está casi nuevo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0001-2017',
    idItem:'4',
    nombreItem:'Cable Energía Proyector x',
    detallePrestamo: 'El cable está casi nuevo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0001-2017',
    idItem:'5',
    nombreItem:'Cable Conector Laptop - Proyector x',
    detallePrestamo: 'El cable está casi nuevo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0002-2017',
    idItem:'6',
    nombreItem:'Laptop x',
    detallePrestamo: 'Esta laptop tiene un rasguño en el logo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0002-2017',
    idItem:'7',
    nombreItem:'Laptop y',
    detallePrestamo: 'Esta laptop tiene un rasguño en la esquina superior derecha',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0002-2017',
    idItem:'8',
    nombreItem:'Cable Energía Laptop x',
    detallePrestamo: 'El cable está casi nuevo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0002-2017',
    idItem:'9',
    nombreItem:'Cable Energía Laptop y',
    detallePrestamo: 'El cable está casi nuevo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0003-2017',
    idItem:'10',
    nombreItem:'Cámara x',
    detallePrestamo: 'Esta cámara tiene un rasguño en el logo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0003-2017',
    idItem:'11',
    nombreItem:'Micrófono x',
    detallePrestamo: 'Este micrófono está nuevo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0003-2017',
    idItem:'12',
    nombreItem:'Cable Energía Laptop x',
    detallePrestamo: 'El cable está casi nuevo',
    estadoPrestamo: 'Bueno'
  },
  {
    idPrestamo:'0003-2017',
    idItem:'13',
    nombreItem:'Cable Conector Laptop - Micrófono',
    detallePrestamo: 'El cable está casi nuevo',
    estadoPrestamo: 'Bueno'
  }
]

estados = ["Bueno", "Regular", "Malo"]

  //PARA EL MODAL BUSCAR PRESTAMO
  selectedRowPrestamo : number;
  selectedPrestamo = []
  selectedDetallePrestamo = []
  setClickedRowPrestamo = function(index){
    this.selectedRowPrestamo = index;
  }
  setDataPrestamo = function(e1 : any){
    this.selectedPrestamo = ''
    this.selectedPrestamo = e1
    this.selectedDetallePrestamo = []
    for (var i=0; i<this.detallePrestamos.length; i++){
      if(this.detallePrestamos[i].idPrestamo == this.selectedPrestamo.idPrestamo){
        this.selectedDetallePrestamo.push(this.detallePrestamos[i])
      }
    }
  }
  borrarSelectedOficio = function(){
    this.selectedPrestamo = ''
  }

}


