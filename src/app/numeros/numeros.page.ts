import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { SharedModuleModule } from '../modules/shared-module/shared-module.module';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})



export class NumerosPage implements OnInit {

  

  constructor(private route: Router, private router: ActivatedRoute) { }

  private idiomaSeleccionado : string="";
  
  audioSrc: string = "../../assets/audios/numeros/"; 
  preload: boolean = true;
  mostrarParpadeo: boolean=false;

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
    let audio = new Audio("../../assets/audios/" + this.idiomaSeleccionado +"/numeros/" + nombreArchivo);
    audio.play();
  }
}


  audioEnded() {
    console.log('Audio terminado');
  }
}
  


