/*
    Con esta sintaxis se puede emular el funcionamiento de clases en JS previo a
    ES6. Como este framework utiliza las WebViews de los sistemas moviles a dia de hoy
    (Octubre 2017) lo mas probable es que no este adoptado este estandar en dichos componentes.
    Mas info http://es6-features.org/#ClassDefinition

    MusicPlayer una clase que relaciona y almacena todos los sonidos por su nombre descriptivo
    similar a un struct de C o una clase de solo atributos publicos.

    A pesar que es un juego simple preferi utilizar estructuras tipicas de motores de juego para
    demostrar el potencial que tiene Apache Cordova a traves de elementos web de generar aplicaciones y
    estructuras de software complejas a traves de una sintaxis no vista en los cursos de la universidad
    y sin en frameworks adicionales a JQuery.
 */

function MusicPlayer() {
    this.background = new Audio("../sound/fondo.mp3");
    this.croak      = new Audio('../sound/ranar.mp3');
    this.croakb     = new Audio('../sound/ranav.mp3');
    this.error      = new Audio('../sound/no.mp3');
    this.drimm      = new Audio('../sound/drim.mp3');

    this.background.loop = true;
    this.background.play();

    return this;
}