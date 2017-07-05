import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventariomaterial',
  templateUrl: './inventariomaterial.component.html',
  styleUrls: ['./inventariomaterial.component.css']
})
export class InventariomaterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  columnasItems = [
    'Código de Item',
    'Nombre',
    'Tipo',
    'Estado',
    'Estado en Inventario',
    'Fecha Entregada',
    'Fecha de Devolución'
  ]
  materiales = [
    {
      idItem: '00001',
      nombreItem: 'Laptop x',
      tipoItem: 'Laptop',
      estado: 'Bueno',
      estadoInv: 'Disponible',
      fechaEntregada: '-',
      fechaDevolucion: '-'
    },
    {
      idItem: '00002',
      nombreItem: 'Proyector x',
      tipoItem: 'Proyector',
      estado: 'Bueno',
      estadoInv: 'Disponible',
      fechaEntregada: '-',
      fechaDevolucion: '-'
    },
    {
      idItem: '00003',
      nombreItem: 'Laptop y',
      tipoItem: 'Laptop',
      estado: 'Bueno',
      estadoInv: 'Disponible',
      fechaEntregada: '-',
      fechaDevolucion: '-'
    },
    {
      idItem: '00004',
      nombreItem: 'Laptop z',
      tipoItem: 'Laptop',
      estado: 'Medio',
      estadoInv: 'Entregado',
      fechaEntregada: '2017-04-20',
      fechaDevolucion: '2017-05-05'
    },
    {
      idItem: '00005',
      nombreItem: 'Proyector y',
      tipoItem: 'Proyector',
      estado: 'Malo',
      estadoInv: 'Mantenimiento',
      fechaEntregada: '-',
      fechaDevolucion: '-'
    },
    {
      idItem: '00006',
      nombreItem: 'Proyector z',
      tipoItem: 'Proyector',
      estado: 'Malo',
      estadoInv: 'Entregado',
      fechaEntregada: '2017-06-30',
      fechaDevolucion: '2017-06-30'
    },
    {
      idItem: '00007',
      nombreItem: 'Micrófono x',
      tipoItem: 'Micrófono',
      estado: 'Bueno',
      estadoInv: 'Disponible',
      fechaEntregada: '-',
      fechaDevolucion: '-'
    },
    {
      idItem: '00008',
      nombreItem: 'Micrófono y',
      tipoItem: 'Micrófono',
      estado: 'Medio',
      estadoInv: 'Mantenimiento',
      fechaEntregada: '-',
      fechaDevolucion: '-'
    },
    {
      idItem: '00009',
      nombreItem: 'Micrófono z',
      tipoItem: 'Micrófono',
      estado: 'Malo',
      estadoInv: 'Disponible',
      fechaEntregada: '-',
      fechaDevolucion: '-'
    }
  ]


}
