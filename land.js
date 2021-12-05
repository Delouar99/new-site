


function area(tyfe , length , width){

    if( tyfe == ' s '){
        return length * length ;
    }else if( tyfe == ' r '){
        return length * width ;
    }else if( tyfe == ' t '){
        return .5 * length * width ;
    }

}


console.log(area(' t ') , 60 , 30);