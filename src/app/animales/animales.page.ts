import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {
  private idiomaSeleccionado: string = '';
  orientation: string = '';
  audioSrc: string = "../../assets/audios/animales/"; 
  preload: boolean = true;
  mostrarParpadeo: boolean = false;
  public animales = ['leon', 'elefante', 'hipopotamo', 'tucan', 'jirafa', 'tigre', 'chancho', 'cebra', 'mono', 'gallina'];

  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.animales);
    this.router.queryParams.subscribe(params => {
      this.idiomaSeleccionado = params['dato'];
    });

    this.getOrientation();  // Verifica la orientación al cargar la página

    ScreenOrientation.addListener('screenOrientationChange', () => {
      this.getOrientation();  // Actualiza la orientación en cada cambio
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
      }, 4000);
    } else {
      let audio = new Audio("../../assets/audios/" + this.idiomaSeleccionado + "/animales/" + nombreArchivo);
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