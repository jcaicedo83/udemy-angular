(()=>{
    const retirarDinero =(montoRetirar : number) : Promise<number>=>{
        let dineroActual =1250;

        return new Promise((resolve,reject)=>{
            if (montoRetirar >dineroActual){
                reject('Sin fondos suficientes');
            }else{
                dineroActual -=montoRetirar;
                resolve(dineroActual);
            }
        });
    }

    retirarDinero(600)
    .then(montoactual => console.log(`Saldo: ${montoactual}`))
    .catch (err => console.warn(`${err}`));
})();