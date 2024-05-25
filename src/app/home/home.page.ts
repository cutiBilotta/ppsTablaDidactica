import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationExtras , ActivatedRoute  } from '@angular/router';
import { SharedModuleModule } from '../modules/shared-module/shared-module.module';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router: Router, private afAuth: AngularFireAuth ) {}


  

    public idiomaSeleccionado : string  ="";

    orientation: string = '';


    ngOnInit() {
  
  
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

  elegirSeccion(seccion:string){

    if(this.idiomaSeleccionado!= ""){
      const navigationExtras: NavigationExtras = {
        queryParams: { dato: this.idiomaSeleccionado }
      };
      console.log(seccion);
      this.router.navigate(['/'+seccion], navigationExtras);
    }else{
      this.router.navigateByUrl(seccion);

    }

  }

  async cerrarSesion() {


  
    // Cerrar la sesión y redirigir al usuario a la página de inicio de sesión
    await this.afAuth.signOut();
    this.router.navigateByUrl('login');
  }

 
}
