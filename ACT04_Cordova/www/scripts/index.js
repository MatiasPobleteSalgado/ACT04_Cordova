/*
    La clase App tiene similitud a la implementacion tipica de una actividad en android nativo
    los eventos tipicos del ciclo de vida se relacionan a un metodo lo que permite en una
    estructura de codigo mucho mas ordena trabajar de una forma muy parecida al desarrollo nativo.
    El uso de JQuery como selector de elementos en DOM establece una dinamica muy parecida a como se 
    obtienen en java con la funcion findViewById
 */

function App(dom) {
    "use strict";
    /*
     Referencia a al objeto mismo(var _this), utilizada en funciones llamadas en callbacks debido al cambio de scope
     https://www.w3schools.com/js/js_scope.asp
     */
    var _this = this;
    this.doc = $(dom);
    this.player = new MusicPlayer();
    this.bases = $(".baseCont");
    this.resetBtn = $("#resetBtn");
    this.states = {
        0: 1, 
        1: 1, 
        2: 1, 
        3: 0, 
        4: 2, 
        5: 2,
        6: 2
    };
    this.imag = {0: "images/0.png", 1: "images/1.png", 2: "images/2.png",};

    this.init = function(){
        dom.addEventListener("deviceready", this.loadAndroidEvents, true); // JS style
        _this.player.background.loop = true;
        _this.player.background.play();
        _this.bases.click(_this.click);
        _this.resetBtn.click(function(){location.reload();});
    };

    this.loadAndroidEvents = function () {
        console.log("loading app");
        "use strict";
        /*
            Ya que el ciclo de vida de android es relativamente complejo y extenso no se implementan cada uno de los eventos
            sino solo los necesarios, si la aplicacion requiriese reconexiones, inicializar sockets, o utilizacion de sensores
            o hardware del telefono se deberia implementar cada uno de estos metodos de acuerdo al caso.
            Aqui no es necesario aun asi dejo el codigo de como podria verse en una app mas elaborada
            //_this.doc.on('create', _this.onCreate);
            //_this.doc.on('start', _this.onStart);
            //_this.doc.on('restart', _this.onRestart);
            //_this.doc.on('resume', _this.onResume);
            //_this.doc.on('pause', _this.onPause);
            //_this.doc.on('stop', _this.onStop);
            //_this.doc.on('destroy', _this.onDestroy);
        */
    };

    this.checkWin = function(){
        // comparacion elemento a elemento en objeto JSOn si tienen mismo orden
        if(JSON.stringify(this.states) === JSON.stringify({0: 2, 1: 2, 2: 2, 3: 0, 4: 1, 5: 1, 6: 1})){
            this.player.drim.play();
            setTimeout(function(){location.reload();}, 1000);// ventaja de tec. web al recargar pagina se recarga todo muy facil
        }
    }

    this.baseClick = function(base){
        // base es el indice de la base
        var baseState = _this.states[base]; // baseState es si la base esta vacia, con rana roja o verde
        if(baseState == 0){ // click a base vacia
            return 0;
        }
        else if(baseState == 1){// Primero revisar casos de ranas rojas q van hacia derecha
            if(base < 5){// Caso q no es penultima se puede avanzar un espacio o saltar sobre otra rana
                if(_this.states[base + 1] == 0){// revisar si la base sgte o subsgte esta vacia
                    _this.states[base + 1] = 1;// cambia diccionario de estados
                    _this.states[base] = 0;
                    $("#" + (base + 1).toString()).attr("src", _this.imag[1]);// cambia imagenes
                    $("#" + base.toString()).attr("src", _this.imag[0]);
                    _this.checkWin();
                    return 0;
                }
                if(_this.states[base + 2] == 0){
                    _this.states[base + 2] = 1;
                    _this.states[base] = 0;
                    $("#" + (base + 2).toString()).attr("src", _this.imag[1]);
                    $("#" + base.toString()).attr("src", _this.imag[0]);
                    _this.checkWin();
                    return 0;
                }
            }
            else{
                if(base == 5){// si es penultima solo en este caso hay movimiento, si es click en ultima rana es un "noouu!"
                    if(_this.states[base + 1] == 0){
                        _this.states[base + 1] = 1;
                        _this.states[base] = 0;
                        $("#" + (base + 1).toString()).attr("src", _this.imag[1]);
                        $("#" + base.toString()).attr("src", _this.imag[0]);
                        _this.checkWin();
                        return 0;
                    }
                }
            }
        }
        else{// finalmente ranas verdes hacia izquierda
            if(base > 1){// Misma mecanica hacia el otro lado
                if(_this.states[base - 1] == 0){
                    _this.states[base - 1] = 2;
                    _this.states[base] = 0;
                    $("#" + (base -1).toString()).attr("src", _this.imag[2]);
                    $("#" + base.toString()).attr("src", _this.imag[0]);
                    _this.checkWin();
                    return 0;
                }
                if(_this.states[base - 2] == 0){
                    _this.states[base - 2] = 2;
                    _this.states[base] = 0;
                    $("#" + (base - 2).toString()).attr("src", _this.imag[2]);
                    $("#" + base.toString()).attr("src", _this.imag[0]);
                    _this.checkWin();
                    return 0;
                }
            }
            else{
                if(base == 1){
                    if(_this.states[base - 1] == 0){
                        _this.states[base - 1] = 2;
                        _this.states[base] = 0;
                        $("#" + (base - 1).toString()).attr("src", _this.imag[2]);
                        $("#" + base.toString()).attr("src", _this.imag[0]);
                        _this.checkWin();
                        return 0;
                    }
                }
            }
        }

        _this.player.nou.play();
    };

    this.doc.ready(this.init);
    return this;
};

app = new App(document);

function jump(base){
    app.baseClick(parseInt(base));
}