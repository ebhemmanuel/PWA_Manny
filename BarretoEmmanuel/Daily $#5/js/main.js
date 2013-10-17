///*
// * Created with JetBrains WebStorm.
// * User: Emmanuel Barreto
// * Date: 10/10/13
// * Time: 9:30 am
// */
//
//
//        // Review on Object | Key:Value pairs
//
var cars = [];
//
var car = {type: 'Sports', color:'Red', year:'1969', model:'Chevy', make:'Camaro',

        /* How to create a function */

        move: function(){console.log('I am moving.');{

    }   // Closing function.

}      // Closing Object.


    //..............................................................................


        //  cars.push(car);                // Pushes out the object into the array


    // for (var keys in car) {

    // console.log(keys);       // Loops through the object and pushes out through the console all the keys in the object.
    // car['color'] keys= 'color'
    // console.log(car[keys]);
    // console.log(keys, car[keys]);
    // keys in this case either access the property or value if used as a sub index.
}

var dog = {
      color    : 'Brown',
      character: 'Happy',
      eyecolor : 'White',
      action   : function(){

        return console.log('Dog just rolled over... and then he farted.')

}};

var dog2 = {
    color    : 'Brown',
    character: 'Happy',
    eyecolor : 'White',
    action   : function(){

        return console.log('Dog just rolled over... and then he farted.')

    }};


var myDogs= [];

    myDogs.push(dog,dog2);
    // myDogs= [dog,dog2];

    //    myDogs=[{},{}]

console.log(myDogs[0],myDogs[1]);
myDogs[1].action();

var kid = {

    USF:[ {

        id:32,
        name:'bob'


    },


{    id:32,
    name:'bob2'

}


] };

console.log(kid.USF[0].name);

for  (i=0; i<kid.USF.length; i++) {

    console.log(kid.USF[i].name);
}

     kid.UF= [{id:0,
               name:'' }];     //adds a new property to kid object

var person = {

    name: 'scott',
    age:37
} ;

    person.gender='m';


var students = {name : 'bob', grades: [], average: 0};

//    students.grades.push(90,80,70); // only works with an array, not with an object. The system will not recognize the system

function avg (myArray) {

    var myTotal=0;

     myArray.forEach(function (e) { myAverage+=e});

   var myAverage= myTotal/myArray.length;

    return myAverage;

}
//
//students.average= avg (students.grades);

//function showInfo (obj) {
//
//    for (var key in obj ) {  console.log (key, obj[key])
//
//
//    }

//}


function showInfo (arr) {            // loops through the array to show the info within the array.

    arr.forEach(function(e){

        for (var key in e ) {
            console.log (key, e[key]);}

    })


}

//function showInfo (obj) {
//
//    for (var key in obj ) {  console.log (key, obj[key])
//
//
//    }
//
//}

console.log(showInfo(students));








//var myFunction = function () {};
//self executing function
// anon functions
// named functions
// functions - parameters and arguments


// console.log(car.color)      // Dot Syntax form.
// console.log(car['color'])   // Array Axis Notation form.




var button = document.querySelector("button");  // if there was an ID you would use #;
console.log(button);

button.addEventListener("click", onClick);      // the ".button" could be a div, could be anything on your html. Explorer 9 or higher.

//button.removeEventListener("click", onClick);

function onClick (e) {                          // you don't need E, but i's recommended.

         console.log(e,"test time");

}



console.log(student);

//console.log(month, date)
//
//
//
//console.log(date);