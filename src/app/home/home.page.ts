import { Component, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras , ActivatedRoute  } from '@angular/router';
import { SharedModuleModule } from '../modules/shared-module/shared-module.module';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, private afAuth: AngularFireAuth ) {}

    public idiomaSeleccionado : string  ="";

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
