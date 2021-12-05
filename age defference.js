

function agecal( name , year){
    
    if( 2021 - year  <= 5){
  return `hi my name is ${name}, & i am ${2021 -  year} years old. you are baby`;
}else if( 2021 - year  <= 18){
    return `hi my name is ${name}, & i am ${2021 -  year} years old. you are teenagers`;
  }else if( 2021 - year  > 19){
    return `hi my name is ${name}, & i am ${2021 -  year} years old. you are Young`;
  }else if( 2021 - year  > 45){
    return `hi my name is ${name}, & i am ${2021 -  year} years old. you are old people`;
  }


}

console.log(agecal('Mahin' ,  2019));
console.log(agecal('monir' ,  2005));
console.log(agecal('santo' ,  1998));
console.log(agecal('delouar' ,  1985));






