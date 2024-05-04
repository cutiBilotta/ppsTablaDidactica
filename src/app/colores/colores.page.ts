import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {


  constructor(private route: Router, private router: ActivatedRoute) { }

  private idiomaSeleccionado : string="";
  
  audioSrc: string = "../../assets/audios/colores/"; 
  preload: boolean = true;
  mostrarParpadeo:boolean = false;

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
      this.mostrarParpadeo = true;
      setTimeout(() => {
        this.mostrarParpadeo = false;
      }, 4000); // 4000 milisegundos = 4 segundos
    
  }else{
    let audio = new Audio("../../assets/audios/" + this.idiomaSeleccionado +"/colores/" + nombreArchivo);
    audio.play();
  }
}


  audioEnded() {
    console.log('Audio terminado');
  }
}


