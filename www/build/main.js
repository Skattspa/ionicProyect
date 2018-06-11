webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage() {
    }
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Welcome to your first Ionic app!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JuanPage = /** @class */ (function () {
    function JuanPage() {
    }
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
    JuanPage.prototype.calcularIMC = function () {
    };
    JuanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'JuanPage',template:/*ion-inline-start:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/JuanPage/JuanPage.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Juan Page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<div class="container">\n  <h3>Juan Page!</h3>\n\n  <p>\n    Cosas\n  </p>\n  <p>\n    Follow cosas!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Pal menu</button>\n  </p>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/JuanPage/JuanPage.html"*/,
            styles: ["h3{\n    color:#483D8B;\n  }\n  div.container{\n    text-align: center !important;\n  }\n  div {\n    width: 100px;\n    height: 100px;\n    background-color: red;\n    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */\n    animation-name: example;\n    animation-duration: 4s;\n}\n\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes example {\n    from {background-color: red;}\n    to {background-color: yellow;}\n}\n\n/* Standard syntax */\n@keyframes example {\n    from {background-color: red;}\n    to {background-color: yellow;}\n}"]
        })
    ], JuanPage);
    return JuanPage;
}());

//# sourceMappingURL=JuanPage.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiPagina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_persona_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiPagina = /** @class */ (function () {
    function MiPagina(persona_service, alertCtrl) {
        var _this = this;
        this.persona_service = persona_service;
        this.alertCtrl = alertCtrl;
        this.estatura = 1.89;
        this.peso = 85;
        this.persona_cargada = false; //atributo del componente
        this.esperando_persona = true;
        this.persona = persona_service.getPersona(); // new Persona ("Judith", 1.70, 58);
        persona_service.getPersonaHttp().subscribe(function (ok) { return _this.consumirRespuestaPersona(ok); }); //llamar a persona
        persona_service.getListaPersonasHttp().subscribe(function (listaok) { return _this.consumirRespuestaListaPersona(listaok); }); //llamar a lista personas y obtener array
    }
    MiPagina.prototype.consumirRespuestaPersona = function (ok) {
        this.persona = ok;
        this.persona_cargada = true;
        this.showAlert();
        console.log("Persona rx " + this.persona.nombre + " " + this.persona.peso + " " + this.persona.estatura);
    };
    MiPagina.prototype.calculaIMC = function () {
        this.persona_service;
        console.log("Ha llamado a calcula IMC");
        var imc = 0;
        imc = this.persona.peso / (this.persona.estatura * this.estatura);
        console.log("IMC " + imc);
        this.resultado = imc;
    };
    MiPagina.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
        });
        alert.present();
    };
    MiPagina.prototype.mostrarPersona = function (persona) {
        console.log("persona.nombre " + persona.nombre);
        console.log("persona.peso " + persona.peso);
    };
    MiPagina.prototype.consumirRespuestaListaPersona = function (ok) {
        var _this = this;
        this.lista_personas = ok;
        console.log("LP =" + this.lista_personas);
        // for (let i=0; i<this.lista_personas.length; i++){
        //   this.mostrarPersona(this.lista_personas[i]);
        // }
        // console.log ("estilo for in")
        // for (let index in this.lista_personas) {
        //   this.mostrarPersona(this.lista_personas[index]);
        // }
        console.log("estilo map");
        this.lista_personas.map(function (persona) { return _this.mostrarPersona(persona); });
    };
    MiPagina = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mipagina',template:/*ion-inline-start:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/mipagina/mipagina.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mi pagina</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>TOQUETEANDO!</h3>\n\n  <p>\n    Esta es mi primera page Ionic\n  </p>\n  <div *ngIf="persona_cargada">\n    <label for="peso">PESO (Kg)</label>\n    <input type="text" size="4" id="peso" [(ngModel)]="persona.peso">\n    <br>\n    <label for="estatura">ESTATURA (M)</label>\n    <input type="text" size="4" id="estatura" [(ngModel)]="persona.estatura">\n    <button ion-button (click)="calculaIMC()">CalculaIMC</button>\n    <label for="resultado">Resultado</label>\n    <input type="text" size="4" id="resultado" readonly value={{resultado}}>\n    <p>\n      <button ion-button color="primary" menuToggle>Toggle Menu</button>\n    </p>\n  </div>\n  <div *ngIf="!persona_cargada">\n    <p class="loader"></p>\n    <!-- <img src="assets/imgs/logo.png" height="50px" width="50px"> -->\n  </div>\n  <div *ngIf="!lista_personas">\n    <div *ngFor="let unapersona of lista_personas; let i = index">\n      <ul>\n        <li (click)=mostrarPersona(unapersona)>{{i}}--{{unapersona.nombre}},{{unapersona.peso}} </li>\n      </ul>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/mipagina/mipagina.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_persona_service__["a" /* PersonaService */]],
            styles: [".loader {\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_persona_service__["a" /* PersonaService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], MiPagina);
    return MiPagina;
}());

//# sourceMappingURL=mipagina.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiCancionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_itunes_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiCancionComponent = /** @class */ (function () {
    function MiCancionComponent(itunes_service, alertCtrl) {
        var _this = this;
        this.itunes_service = itunes_service;
        this.alertCtrl = alertCtrl;
        this.trackName = "trackName";
        this.artworkUrl30 = "artworkUrl30";
        this.previewUrl = "previewUrl";
        this.cancion_cargada = false; //atributo del componente
        this.esperando_canciones = true;
        this.cancion = itunes_service.getCancion(); // new cancion ("Juan", "cosas", "cosas");
        itunes_service.getCancionHttp().subscribe(function (ok) { return _this.consumirRespuestaCancion(ok); }, function (error) { return _this.consumirRespuestaCancion(error); }); //llamar a persona
        itunes_service.getListaCancionesHttp().subscribe(function (listaok) { return _this.consumirRespuestaListaCanciones(listaok); }); //llamar a lista personas y obtener array
    }
    MiCancionComponent.prototype.consumirRespuestaCancion = function (ok) {
        // this.cancion = <ItunesModel> JSON.parse(ok); como se parsea una respuesta? porque tengo undefined?
        this.cancion = ok;
        this.cancion_cargada = true;
        console.log("consumirRespuestaCancion", this.cancion);
        for (var i = 0; i < this.cancion.results.length; i++) {
            console.log("cancion por cancion", this.cancion.results[i]);
            this.mostrarCancion(this.cancion.results[i]);
        }
        // this.showAlert();
        // console.log ("Cancion rx " + this.cancion.trackName + " " +this.cancion.artworkUrl30);
    };
    // showAlert() {
    //   const alert = this.alertCtrl.create({
    //     title: 'New Song!',
    //     subTitle: 'Lararala!',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }
    MiCancionComponent.prototype.mostrarCancion = function (cancion) {
        console.log("cancion.nombre " + cancion.trackName);
        console.log("cancion.imagen " + cancion.artworkUrl30);
    };
    MiCancionComponent.prototype.consumirRespuestaListaCanciones = function (ok) {
        this.lista_canciones = ok;
        // this.lista_canciones = JSON.parse(ok);
        // let parseCanciones =  JSON.parse(<ItunesModel[]>);
        // console.log(parseCanciones);
        console.log("Lista Canciones = " + this.lista_canciones);
        // for (let i=0; i<this.lista_canciones.length; i++){
        //   this.mostrarCancion(this.lista_canciones.results[i]);
        // }
        // console.log ("estilo for in")
        // for (let index in this.lista_personas) {
        //   this.mostrarPersona(this.lista_personas[index]);
        // }
        //console.log("estilo map")
        // this.lista_canciones.results.map (cancion => this.mostrarCancion(cancion));
    };
    MiCancionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'itunes',template:/*ion-inline-start:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/itunes/itunes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Itunes</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <h3>TOQUETEANDO!</h3>\n  <div *ngIf="!persona_cargada">\n    <p class="loader"></p>\n  </div>\n  <button (click)="mostrarCancion(unacancion)">Buscar Cancion</button>\n  \n  <ul>      \n    <li>{{cancion.trackName}},{{cancion.artworkUrl30}},{{cancion.previewUrl}} </li>\n  </ul>\n\n  \n</ion-content>'/*ion-inline-end:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/pages/itunes/itunes.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_itunes_service__["a" /* ItunesService */]],
            styles: [".loader {\n    border: 16px solid #f3f3f3; /* Light grey */\n    border-top: 16px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}"]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_itunes_service__["a" /* ItunesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_itunes_service__["a" /* ItunesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], MiCancionComponent);
    return MiCancionComponent;
    var _a, _b;
}());

//# sourceMappingURL=itunes.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_JuanPage_JuanPage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mipagina_mipagina__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_itunes_itunes__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_JuanPage_JuanPage__["a" /* JuanPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mipagina_mipagina__["a" /* MiPagina */],
                __WEBPACK_IMPORTED_MODULE_12__pages_itunes_itunes__["a" /* MiCancionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_JuanPage_JuanPage__["a" /* JuanPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mipagina_mipagina__["a" /* MiPagina */],
                __WEBPACK_IMPORTED_MODULE_12__pages_itunes_itunes__["a" /* MiCancionComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_JuanPage_JuanPage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mipagina_mipagina__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_itunes_itunes__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Juan Page', component: __WEBPACK_IMPORTED_MODULE_6__pages_JuanPage_JuanPage__["a" /* JuanPage */] },
            { title: 'Mi pagina', component: __WEBPACK_IMPORTED_MODULE_7__pages_mipagina_mipagina__["a" /* MiPagina */] },
            { title: 'Itunes', component: __WEBPACK_IMPORTED_MODULE_8__pages_itunes_itunes__["a" /* MiCancionComponent */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/sk4tt/Escritorio/MyIonicProject 2/MyIonicProject/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persona_model__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Servicio que nos proporciona
 * información de una persona
 */
var PersonaService = /** @class */ (function () {
    function PersonaService(http) {
        this.http = http;
    }
    PersonaService_1 = PersonaService;
    PersonaService.prototype.getPersonaHttp = function () {
        var persona_remota;
        persona_remota = this.http.get(PersonaService_1.URL_SERVICIO_PERSONAS);
        return persona_remota;
    };
    PersonaService.prototype.getPersona = function () {
        var persona;
        persona = new __WEBPACK_IMPORTED_MODULE_1__persona_model__["a" /* Persona */]("Juan", 1.90, 80);
        return persona;
    };
    PersonaService.prototype.getListaPersonasHttp = function () {
        var lista_persona_remota;
        lista_persona_remota = this.http.get(PersonaService_1.URL_SERVICIO_LISTA_PERSONAS);
        return lista_persona_remota;
    };
    PersonaService.URL_SERVICIO_PERSONAS = "http://10.1.2.10:8080/appwebprofe/GetPersona";
    PersonaService.URL_SERVICIO_LISTA_PERSONAS = "http://10.1.2.10:8080/appwebprofe/GetListaPersonas";
    PersonaService = PersonaService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PersonaService);
    return PersonaService;
    var PersonaService_1;
}());

//# sourceMappingURL=persona.service.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persona; });
var Persona = /** @class */ (function () {
    function Persona(nombre, estatura, peso) {
        this.nombre = nombre;
        this.estatura = estatura;
        this.peso = peso;
    }
    return Persona;
}());

//# sourceMappingURL=persona.model.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItunesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__itunes_model__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Servicio que nos proporciona
 * información de una persona
 */
var ItunesService = /** @class */ (function () {
    function ItunesService(http) {
        this.http = http;
    }
    ItunesService_1 = ItunesService;
    ItunesService.prototype.getCancionHttp = function () {
        var cancion_remota;
        cancion_remota = this.http.get(ItunesService_1.URL_SERVICIO_Itunes);
        return cancion_remota;
    };
    ItunesService.prototype.getCancion = function () {
        var cancion;
        cancion = new __WEBPACK_IMPORTED_MODULE_1__itunes_model__["a" /* ItunesModel */]("Juan", "cosas", "cosas");
        return cancion;
    };
    ItunesService.prototype.getListaCancionesHttp = function () {
        var lista_canciones_remota;
        lista_canciones_remota = this.http.get(ItunesService_1.URL_SERVICIO_LISTA_PERSONAS);
        return lista_canciones_remota;
    };
    ItunesService.URL_SERVICIO_Itunes = "https://itunes.apple.com/search?term=" + "hola" + "&media=music&limit=20";
    ItunesService.URL_SERVICIO_LISTA_PERSONAS = "https://itunes.apple.com/search?term=" + "hola" + "&media=music&limit=20";
    ItunesService = ItunesService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ItunesService);
    return ItunesService;
    var ItunesService_1;
}());

//# sourceMappingURL=itunes.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItunesModel; });
var ItunesModel = /** @class */ (function () {
    function ItunesModel(nombre, imagen, url) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.url = url;
    }
    return ItunesModel;
}());

//# sourceMappingURL=itunes.model.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map