"use strict";
(() => {
    // Uso de Let y Const
    let nombre = 'Ricardo Tapia';
    let edad = 23;
    const PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    const batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    const evaluar = (dcHero) => {
        console.log(`este es ${dcHero.nombre} y sus habilidades son ${dcHero.artesMarciales}`);
    };
    // Convertir esta funcion a una funcion de flecha
    const resultadoDoble = (a, b) => (a + b) * 2;
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    const getAvenger = (nombre, poder, arma = `ninguna`) => {
        let mensaje;
        if (poder) {
            mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
        }
        else {
            mensaje = `${nombre} tiene un: ${arma}`;
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
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
            this.getArea = () => this.base * this.altura;
        }
    }
})();
