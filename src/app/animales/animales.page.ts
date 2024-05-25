import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {
  private idiomaSeleccionado: string = "espaniol";
  orientation: string = '';
  audioSrc: string = "../../assets/audios/animales/"; 
  preload: boolean = true;
  mostrarParpadeo: boolean = false;
  imgSrc: string = '../../assets/img/flauarg.png';

  public animales = ['leon', 'elefante', 'hipopotamo', 'tucan', 'jirafa', 'tigre', 'chancho', 'cebra', 'mono', 'gallina'];

  constructor(private route: Router, private router: ActivatedRoute, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.idiomaSeleccionado="espaniol";
    console.log(this.idiomaSeleccionado);
    console.log(this.animales);
   
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


  seleccionarIdioma() {
    const img = document.getElementById('imgIdioma') as HTMLImageElement;

    if (this.idiomaSeleccionado === 'espaniol') {
      this.idiomaSeleccionado = 'portugues';
      this.imgSrc = '../../assets/img/flagbr.png';
    } else if (this.idiomaSeleccionado === 'portugues') {
      this.idiomaSeleccionado = 'ingles';
      this.imgSrc = '../../assets/img/flageu.png';
    } else {
      this.idiomaSeleccionado = 'espaniol';
      this.imgSrc = '../../assets/img/flauarg.png';
    }
  }

  async cerrarSesion() {


  
    // Cerrar la sesión y redirigir al usuario a la página de inicio de sesión
    await this.afAuth.signOut();
    this.route.navigateByUrl('login');
  }


}