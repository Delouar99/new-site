

 let name =prompt ('Student name');
 let roll = prompt('student roll number');

 let  bn = Number(prompt('Bangla'));
 
 let  en = Number(prompt('English'));
 
 let  math = Number(prompt('Math'));
 
 let  s = Number(prompt('Science'));
 
 let  ss = Number(prompt('Socal science'));
 
 let  rel = Number(prompt('Relagion'));


 console.log(`
          
      student name : ${name}
      student roll   : ${roll}

    subjet                    mark               gpa                         grade

    bangla                   ${bn}            ${gpa(bn)}              ${grade(bn)}
    english                  ${en}            ${gpa(en) }              ${grade(en)}
    math                      ${math}       ${gpa(math)}           ${grade(math)}
    science                   ${s}             ${gpa(s)}                  ${grade(s)}
     socal science           ${ss}          ${gpa(ss)}                ${grade(ss)}
     relagion                   ${rel}        ${gpa(rel)}                ${grade(rel)}
   --------------------------------------------------
                                                        cgpa ${  cgpa(gpa(bn),  gpa(en),  gpa(math), gpa(s), gpa(ss), gpa(rel)  ) }
 
 
 `);   


