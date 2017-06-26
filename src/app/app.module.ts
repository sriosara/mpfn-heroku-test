import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InternarbienComponent } from './internarbien/internarbien.component';
import { RegistrarsalidabienComponent } from './registrarsalidabien/registrarsalidabien.component';
import { RegistrarretornobienComponent } from './registrarretornobien/registrarretornobien.component';
import { ReportesbiComponent } from './reportesbi/reportesbi.component';
import { TranscripcionaudiovideoComponent } from './transcripcionaudiovideo/transcripcionaudiovideo.component';
import { RegistraractaentregaComponent } from './registraractaentrega/registraractaentrega.component';
import { RegistrardevolucionComponent } from './registrardevolucion/registrardevolucion.component';
import { ReportesavComponent } from './reportesav/reportesav.component';
import { InventariomaterialComponent } from './inventariomaterial/inventariomaterial.component';
import { InventarioavComponent } from './inventarioav/inventarioav.component';
import { LoginComponent } from './login/login.component';
import { InventariobiComponent } from './inventariobi/inventariobi.component';




const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'internarbien', component: InternarbienComponent },
  { path: 'registrarsalidabien', component: RegistrarsalidabienComponent },
  { path: 'registrarretornobien', component: RegistrarretornobienComponent },
  { path: 'reportesbi', component: ReportesbiComponent },
  { path: 'transcripcionaudiovideo', component: TranscripcionaudiovideoComponent },
  { path: 'registraractaentrega', component: RegistraractaentregaComponent },  
  { path: 'registrardevolucion', component: RegistrardevolucionComponent },
  { path: 'reportesav', component: ReportesavComponent },
  { path: 'inventariomaterial', component: InventariomaterialComponent },
  { path: 'inventarioav', component: InventarioavComponent },
  { path: 'inventariobi', component: InventariobiComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternarbienComponent,
    RegistrarsalidabienComponent,
    RegistrarretornobienComponent,
    ReportesbiComponent,
    TranscripcionaudiovideoComponent,
    RegistraractaentregaComponent,
    RegistrardevolucionComponent,
    ReportesavComponent,
    InventariomaterialComponent,
    InventarioavComponent,
    LoginComponent,
    InventariobiComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

