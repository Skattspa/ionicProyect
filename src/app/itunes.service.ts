import { Injectable } from "@angular/core";
import { ItunesModel } from "./itunes.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

/**
 * Servicio que nos proporciona
 * información de una persona
 */
@Injectable()
export class ItunesService {
   
    static URL_SERVICIO_Itunes : string = "https://itunes.apple.com/search?term="+"hola"+"&media=music&limit=20";
    static URL_SERVICIO_LISTA_PERSONAS : string = "https://itunes.apple.com/search?term="+"hola"+"&media=music&limit=20";
    
    constructor( private http : HttpClient)
    {

    }

    getCancionHttp (): Observable<ItunesModel[]>
    {
        let cancion_remota : Observable<ItunesModel[]>;

            cancion_remota = this.http.get<ItunesModel[]> (ItunesService.URL_SERVICIO_Itunes);
       
        return cancion_remota;
    }

    getCancion () : ItunesModel
    {
        let cancion : ItunesModel;

            cancion = new ItunesModel ("Juan","cosas", "cosas");

        return cancion;

    }

    getListaCancionesHttp ()  : Observable<ItunesModel[]> 
    {
        let lista_canciones_remota : Observable<ItunesModel[]>;

            lista_canciones_remota = this.http.get<ItunesModel[]> (ItunesService.URL_SERVICIO_LISTA_PERSONAS);
       
        return lista_canciones_remota;

    }

}