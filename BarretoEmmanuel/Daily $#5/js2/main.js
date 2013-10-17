/*
* Created with JetBrains WebStorm.
* User: Emmanuel Barreto
* Date: 10/10/13
* Time: 12:30 pm
*/

(function(){

    var data = [];

   var person1 = {

       name:'Bob'
   };

    var person2 = {

        name:'Bob'
    };

    var totalKeys =0;

    for ( var keys in person1) {

        totalKeys++;
    }

    console.log(totalKeys);

    for ( var keys in person1) {

        console.log(keys,person1[keys]);

        data.push(person1[keys]);

    }


    addPeople();

    function addPeople (?) {  // place the number of properties instead of the "?", and then insert those properties into the object within the array.


    }

    ////

    function addPerson (myObj, itsName)  {

         myObj={};
        myObj.name=itsName;
        myPeople.push(myObj)


    }

    var myPeople = [];

        myPeople.push= (person1, person2);

    console.log(myPeople);

    console.log(data);
    // {} object literal
    //



})();