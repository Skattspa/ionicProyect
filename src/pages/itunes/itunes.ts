import { Component, style } from '@angular/core';
import { ItunesModel } from '../../app/itunes.model';
import { ItunesService } from '../../app/itunes.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'itunes',
  templateUrl: 'itunes.html',
  providers: [ItunesService],
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

export class MiCancionComponent {

  private cancion : ItunesModel;
  private trackName: string;
  private artworkUrl30: string;
  private previewUrl: string;
  private cancion_cargada : boolean;
  private esperando_canciones : boolean;
  private lista_canciones : ItunesModel[];

  constructor(private itunes_service : ItunesService, public alertCtrl: AlertController) {
    this.trackName = "trackName";
    this.artworkUrl30 = "artworkUrl30";
    this.previewUrl = "previewUrl";
    this.cancion_cargada = false; //atributo del componente
    this.esperando_canciones = true;
    this.cancion = itunes_service.getCancion();// new cancion ("Juan", "cosas", "cosas");

    itunes_service.getCancionHttp().subscribe
    (ok => this.consumirRespuestaCancion (ok),
    error =>this.consumirRespuestaCancion (error)); //llamar a persona
    itunes_service.getListaCancionesHttp().subscribe
    (listaok => this.consumirRespuestaListaCanciones(listaok)); //llamar a lista personas y obtener array
  }

  consumirRespuestaCancion ( ok : any)
  {
    
   // this.cancion = <ItunesModel> JSON.parse(ok); como se parsea una respuesta? porque tengo undefined?
    this.cancion = <ItunesModel> ok; 
    this.cancion_cargada = true;
    console.log("consumirRespuestaCancion",this.cancion);
   for (let i=0; i<this.cancion.results.length; i++){
      console.log("cancion por cancion",this.cancion.results[i]);
      this.mostrarCancion(this.cancion.results[i]);
   }
   

   // this.showAlert();
   // console.log ("Cancion rx " + this.cancion.trackName + " " +this.cancion.artworkUrl30);

  }




  // showAlert() {
  //   const alert = this.alertCtrl.create({
  //     title: 'New Song!',
  //     subTitle: 'Lararala!',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

  mostrarCancion (cancion: ItunesModel) : void
  {
    console.log("cancion.nombre "+cancion.trackName);
    console.log("cancion.imagen "+cancion.artworkUrl30);
  }

   consumirRespuestaListaCanciones ( ok : any)
   {
    this.lista_canciones = <ItunesModel[]> ok;
   // this.lista_canciones = JSON.parse(ok);
    // let parseCanciones =  JSON.parse(<ItunesModel[]>);
    // console.log(parseCanciones);
    console.log("Lista Canciones = " +this.lista_canciones)
    // for (let i=0; i<this.lista_canciones.length; i++){
    //   this.mostrarCancion(this.lista_canciones.results[i]);
    // }
    // console.log ("estilo for in")
    // for (let index in this.lista_personas) {
    //   this.mostrarPersona(this.lista_personas[index]);
    // }
    //console.log("estilo map")
    // this.lista_canciones.results.map (cancion => this.mostrarCancion(cancion));
   }

}

