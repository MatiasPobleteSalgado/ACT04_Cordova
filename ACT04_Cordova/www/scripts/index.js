/*
    Con esta sintaxis se puede emular el funcionamiento de clases en JS previo a
    ES6

    MusicPlayer una clase que relaciona y almacena todos los sonidos por su nombre descriptivo
 */

function MusicPlayer() {
    this.background = new Audio("rec/fondo.mp3");
    this.croak = new Audio('rec/ranar.mp3');
    this.croakb = new Audio('rec/ranav.mp3');
    this.error = new Audio('rec/no.mp3');
    this.drimm = new Audio('rec/drim.mp3');

    this.background.loop = true;
    this.background.play();

    return this;
}

function App() {

    this.onCreate();

    this.onStart();

    this.onRestart();

    this.onResume();

    this.onPause();

    this.onStop();

    this.onDestroy();
    return this;
}
(function () {
    "use strict";

    // Aqui se aplican los distintos eventos del ciclo de vida tipico de una app
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();