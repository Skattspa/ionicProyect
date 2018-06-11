import { Component, style } from '@angular/core';
import { Persona } from '../../app/persona.model';
import { PersonaService } from '../../app/persona.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'mipagina',
  templateUrl: 'mipagina.html',
  providers: [PersonaService],
  styles: [`.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`]
})

export class MiPagina {

  private persona : Persona;
  private peso : number;
  private estatura : number;
  private resultado : number;
  private persona_cargada : boolean;
  private esperando_persona : boolean;
  private lista_personas : Persona[];

  constructor(private persona_service : PersonaService, public alertCtrl: AlertController) {
    this.estatura = 1.89;
    this.peso = 85;
    this.persona_cargada = false; //atributo del componente
    this.esperando_persona = true;
    this.persona = persona_service.getPersona();// new Persona ("Judith", 1.70, 58);
    
    persona_service.getPersonaHttp().subscribe
    (ok => this.consumirRespuestaPersona (ok) ); //llamar a persona
    persona_service.getListaPersonasHttp().subscribe
    (listaok => this.consumirRespuestaListaPersona(listaok)); //llamar a lista personas y obtener array
  }

  consumirRespuestaPersona ( ok : any)
  {
    this.persona = <Persona> ok;
    this.persona_cargada = true;
    this.showAlert();
    console.log ("Persona rx " + this.persona.nombre + " " +this.persona.peso + " " +this.persona.estatura);

  }
  calculaIMC() {
    this.persona_service;
    console.log ("Ha llamado a calcula IMC");
    let imc : number = 0;
    imc = this.persona.peso / (this.persona.estatura*this.estatura);
    console.log ("IMC " +  imc);
    this.resultado = imc;
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  mostrarPersona (persona: Persona) : void
  {
    console.log("persona.nombre "+persona.nombre);
    console.log("persona.peso "+persona.peso);
  }

  consumirRespuestaListaPersona ( ok : any)
  {
    this.lista_personas = <Persona[]> ok;
    console.log("LP =" +this.lista_personas)
    // for (let i=0; i<this.lista_personas.length; i++){
    //   this.mostrarPersona(this.lista_personas[i]);
    // }
    // console.log ("estilo for in")
    // for (let index in this.lista_personas) {
    //   this.mostrarPersona(this.lista_personas[index]);
    // }
    console.log("estilo map")
    this.lista_personas.map (persona => this.mostrarPersona(persona));
  }


}

