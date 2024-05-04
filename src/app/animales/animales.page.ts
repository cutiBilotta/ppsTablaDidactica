import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {


  constructor(private route: Router, private router: ActivatedRoute) { }

  private idiomaSeleccionado : string="";
  
  audioSrc: string = "../../assets/audios/animales/"; 
  preload: boolean = true;
  mostrarParpadeo :boolean= false;

  ngOnInit() {

    this.router.queryParams.subscribe(params => {
      this.idiomaSeleccionado = params['dato'];
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