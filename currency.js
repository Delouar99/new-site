




let bdt = (currency , ammount) =>{
 if(currency =="dollar"){
     `${ammount / 85} doller.`;
 }else if ( currency == "pound"){
     return`${ammount / 115.32 } pound. `;
 }else if ( currency == "euro"){
     return`${ammount / 98.32} euro.`
 }

}

console.log(bdt("euro" , 85));
console.log(bdt("pound" , 85));
console.log(bdt("pound" , 95));


