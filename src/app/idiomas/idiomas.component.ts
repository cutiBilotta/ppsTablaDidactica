import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss'],
})
export class IdiomasComponent  {

  @Output() idiomaSeleccionado = new EventEmitter<string>();

  seleccionarIdioma(idioma: string) {
    this.idiomaSeleccionado.emit(idioma);
  }


}
