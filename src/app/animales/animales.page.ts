import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {


  constructor(private route: Router, private router: ActivatedRoute) { }

  private idiomaSeleccionado : string="";
  
  orientation: string = '';

  audioSrc: string = "../../assets/audios/animales/"; 
  preload: boolean = true;
  mostrarParpadeo :boolean= false;
  public animales = ['leon', 'elefante', 'hipopotamo', 'tucan', 'jirafa', 'tigre', 'chancho' , 'cebra', 'mono', 'gallina'];

  ngOnInit() {

    console.log(this.animales);
    this.router.queryParams.subscribe(params => {
      this.idiomaSeleccionado = params['dato'];
    });

    ScreenOrientation.addListener('screenOrientationChange', (orientation) => {
      this.getOrientation();
    });
  }

  getOrientation() {
    ScreenOrientation.orientation()
      .then((result) => {
        this.orientation = result.type;
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
    if(this.idiomaSeleccionado=="" || this.idiomaSeleccionado == undefined){
      // En algún lugar de tu lógica donde desees activar la animación por 4 segundos
      this.mostrarParpadeo = true;
      setTimeout(() => {
        this.mostrarParpadeo = false;
      }, 4000); // 4000 milisegundos = 4 segundos
      
  }else{
    let audio = new Audio("../../assets/audios/" + this.idiomaSeleccionado +"/animales/" + nombreArchivo);
    audio.play();
  }
}


  audioEnded() {
    console.log('Audio terminado');
  }
}