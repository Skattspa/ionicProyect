import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'JuanPage',
  templateUrl: 'JuanPage.html',
  styles: [`h3{
    color:#483D8B;
  }
  div.container{
    text-align: center !important;
  }
  div {
    width: 100px;
    height: 100px;
    background-color: red;
    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: example;
    animation-duration: 4s;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
}

/* Standard syntax */
@keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
}`]
})
export class JuanPage {
  // constructor(private persona_service : PersonaService) {
  //     this.estatura = 1.89;
  //     this.persona = persona_service.getPersona (); //new persona
  //     persona_service.getPersonaHttp().subscribe
  //     (ok => this.consumirRespuestaPersona (ok));
  // }

  // consumirRespuestaPersona (ok: any){
  //   this.persona = Persona as ok; //casting
  //   console.log("Persona rx", this.estatura);
  // }
  calcularIMC (){

  }



  
}
