/*
    La clase App tiene similitud a la implementacion tipica de una actividad en android nativo
    los eventos tipicos del ciclo de vida se relacionan a un metodo lo que permite en una
    estructura de codigo mucho mas ordena trabajar de una forma muy parecida al desarrollo nativo
 */

function APP(dom) {
    /**
     Referencia a al objeto mismo(var _this), utilizada en funciones llamadas en callbacks debido al cambio de scope
     https://www.w3schools.com/js/js_scope.asp
     */
    console.log("._.");
    var _this = this;
    this.doc = $(dom);

    this.loadAndroidEvents = function () {
        /*
            Ya que el ciclo de vida de android es relativamente complejo y extenso no se implementan cada uno de los eventos
            sino solo los necesarios, si la aplicacion requiriese reconexiones, inicializar sockets, o utilizacion de sensores
            o hardware del telefono se deberia implementar cada uno de estos metodos de acuerdo al caso.
            Aqui no es necesario
        */
        //_this.doc.on('create', _this.onCreate);
        //_this.doc.on('start', _this.onStart);
        //_this.doc.on('restart', _this.onRestart);
        //_this.doc.on('resume', _this.onResume);
        //_this.doc.on('pause', _this.onPause);
        //_this.doc.on('stop', _this.onStop);
        //_this.doc.on('destroy', _this.onDestroy);
    }
    
    this.onCreate = function () {
        console.log("Create event");
    }

    this.onStart = function () {
    }

    this.onRestart = function () {
    }

    this.onResume = function () {
        console.log("Pause Event");
    }

    this.onPause = function () {
    }

    this.onStop = function () {
    }

    this.onDestroy = function () {
    }

    this.doc.ready(this.loadAndroidEvents);
    console.log("app created");  

    return this;
}

app = new APP(document);