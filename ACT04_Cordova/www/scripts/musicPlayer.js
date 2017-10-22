/*
    Con esta sintaxis se puede emular el funcionamiento de clases en JS previo a
    ES6. Como este framework utiliza las WebViews de los sistemas moviles a dia de hoy
    (Octubre 2017) lo mas probable es que no este adoptado este estandar en dichos componentes.
    Mas info http://es6-features.org/#ClassDefinition

    MusicPlayer una clase que relaciona y almacena todos los sonidos por su nombre descriptivo
    similar a un struct de C o una clase de solo atributos publicos.
 */

function MusicPlayer() {
    this.background = new Audio("sound/fondo.mp3");
    this.croak      = new Audio('sound/ranar.mp3');
    this.croakb     = new Audio('sound/ranav.mp3');
    this.nou        = new Audio('sound/no.mp3');
    this.drim       = new Audio('sound/drim.mp3');

    return this;
}