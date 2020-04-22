(()=>{

  // Uso de Let y Const
  let nombre = 'Ricardo Tapia';
  let edad = 23;

  var PERSONAJE = {
    nombre: nombre,
    edad: edad
  };


  // Cree una interfaz que sirva para validar el siguiente objeto

  interface heroe{
    nombre:string,
    artesMarciales:string[]
  }

const batman :heroe = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  const evaluar= (dcHero: heroe)=>{
      console.log(`este es ${dcHero.nombre} y sus habilidades son ${dcHero.artesMarciales}`);
  }

  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = ( a:number, b:number ) :number => (a + b) * 2;

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvenger= ( nombre:string, poder? : string, arma =`ninguna` )=>{
    var mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

   class rectangulo {
    constructor (public base :number, public altura:number){
    }

     getArea=():number=> this.base * this.altura;
  }

})();