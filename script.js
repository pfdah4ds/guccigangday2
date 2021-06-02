console.log('Welcome to Day 2');

//Hijo xutteko object ko


let person ={
    name : 'Pratik',
    age: 22,
    title:'The Greatest',
    skills: ['python','JS']
};

console.log(person);

//Condionals

    //if statement
//conditions that are false: 0,'',null,undefined,-0
if (10 > 5){
    console.log('Ding dong my long.if statement');
}

    //if-else statement
if(false){
    console.log('This wont run you dingus');
}
else{
    console.log('Else I will end it all');
}



    //if else-if
if (false) console.log('This wont run dingus');

else if(5<10){
    console.log('This will run else if till moon.')
}

else{
    console.log('This wont run again')
}

//Ternary operator

cond = (55>10) ? console.log('Magical Source') : console.log('Not magical');


//Type Coersion
    //number to string
age = 33
console.log(typeof(age));

age = String(age);
console.log(typeof(age));

    //string to number
let pie = '3.14';
console.log(typeof(pie));

const pi = Number(pie);
console.log(typeof(pi));

//Nan
console.log(Number('aaa'));