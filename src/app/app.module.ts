import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { ActualizarDocumentosComponent } from './actualizar-documentos/actualizar-documentos.component';
import { RegistrarDocumentoComponent } from './registrar-documento/registrar-documento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent,
    ListaDocumentosComponent,
    ActualizarDocumentosComponent,
    RegistrarDocumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
