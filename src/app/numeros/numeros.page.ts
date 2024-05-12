import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})



export class NumerosPage implements OnInit {

  

  constructor(private route: Router, private router: ActivatedRoute) { }

  private idiomaSeleccionado : string="";
  
  orientation: string = '';

  audioSrc: string = "../../assets/audios/numeros/"; 
  preload: boolean = true;
  mostrarParpadeo: boolean=false;
  public numeros = [0,1,2,3,4,5,6,7,8,9];
  ngOnInit() {

    this.router.queryParams.subscribe(params => {
      this.idiomaSeleccionado = params['dato'];
    });

    ScreenOrientation.addListener('screenOrientationChange', (orientation) => {
      this.getOrientation();
      console.log(orientation);
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
      this.mostrarParpadeo = true;
      setTimeout(() => {
        this.mostrarParpadeo = false;
      }, 4000); // 4000 milisegundos = 4 segundos
    
  }else{
    let audio = new Audio("../../assets/audios/" + this.idiomaSeleccionado +"/numeros/" + nombreArchivo);
    audio.play();
  }
}


  audioEnded() {
    console.log('Audio terminado');
  }
}
  


