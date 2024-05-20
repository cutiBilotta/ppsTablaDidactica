import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  private idiomaSeleccionado: string = '';
  orientation: string = '';
  audioSrc: string = "../../assets/audios/colores/"; 
  preload: boolean = true;
  mostrarParpadeo: boolean = false;
  public colores = ['negro', 'amarillo', 'azul', 'blanco', 'rojo', 'verde', 'violeta', 'gris', 'rosa', 'naranja'];

  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    // Obtener la orientación actual de la pantalla al inicio
    this.getOrientation();

    // Escuchar cambios en la orientación de la pantalla
    ScreenOrientation.addListener('screenOrientationChange', () => {
      this.getOrientation();
    });
  }

  getOrientation() {
    ScreenOrientation.orientation()
      .then((result) => {
        this.orientation = result.type;
        console.log('Orientación de la pantalla:', this.orientation);
      })
      .catch((error) => {
        console.error('Error al obtener la orientación de la pantalla:', error);
      });
  }

  onIdiomaSeleccionado(idioma: string) {
    this.idiomaSeleccionado = idioma;
  }
  
  reproducirAudio(nombreArchivo: string) {
    console.log(this.idiomaSeleccionado);
    if (this.idiomaSeleccionado == "" || this.idiomaSeleccionado == undefined) {
      this.mostrarParpadeo = true;
      setTimeout(() => {
        this.mostrarParpadeo = false;
      }, 4000); // 4000 milisegundos = 4 segundos
    } else {
      let audio = new Audio("../../assets/audios/" + this.idiomaSeleccionado + "/colores/" + nombreArchivo);
      audio.play();
    }
  }

  audioEnded() {
    console.log('Audio terminado');
  }

  redireccionar(url: string) {
    this.route.navigateByUrl(url);
  }
}