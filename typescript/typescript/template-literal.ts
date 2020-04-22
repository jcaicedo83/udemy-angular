(function (){

    function getEdad(){
        return edad
    }
    const nombre = 'Javier';
    const apellido = 'Caicedo';
    const edad = 37;

    //const salida = nombre +" "+ apellido +" ( "+ edad +" )";
    const salida =` ${ nombre } ${apellido} ( ${getEdad()} )`;
    console.log (salida);
})();