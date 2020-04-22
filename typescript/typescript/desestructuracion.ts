(()=>{
  const avenger ={
      nombre : 'steeve',
      clave : 'Capitan america',
      poder : 'droga'
  }

  let { nombre, clave, poder} = avenger;

  const extraer =({nombre, poder}:any)=>{
  console.log (nombre);
  console.log(poder);
}
//extraer (avenger);

//---------------------------
const avengers: string[]=['Thor','Spiderman','Ironman']

const extraerarr =([t,i,s]:String[])=>{ 
console.log(t);
console.log(s);
console.log(i);
}

extraerarr(avengers);
})();