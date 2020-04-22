(()=>{


    interface XMen
    {
        nombre:string,
        edad:number,
        poder?:string

    }
const enviarAMision = (xmen:XMen)=>{

    console.log(`enviando a ${xmen.nombre} a la mision con ${xmen.poder}`)
}
const traerDeMision = (xmen :{nombre:string})=>{

    console.log(`trayendo a ${xmen.nombre} de la mision`)
}

const wolverine:XMen ={
    nombre: `Logan`,
    edad:60
}

enviarAMision(wolverine);
})();