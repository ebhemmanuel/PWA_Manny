/*
	* Mid Terms for PWA-1
*/

(function(){


    function myDate(){               // Date calc

    var date = new Date();

    var month= date.getMonth()+1;

    var nDate= date.getDate();

    var day= date.getDay();

    var year= date.getFullYear();

    var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat' ];

    var months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug','Sep','Oct','Nov','Dec'];

    var coolDate = days[day]+' '+months[month]+' '+nDate+","+' '+year;

        return  coolDate;

    }

    console.log('--------------------First two students.');

var gpaData    = []; //Catches the GPA data
var students   = [{Name:'Jon Snow',       Address:{Zipcode:4,     Street:'North',    City: 'The Wall', State: 'The Realm',Date:myDate()}, Grades:[1,1.2,2]},      // You know nothing Jon Snow.
                  {Name:'Crimen Vereor',  Address:{Zipcode:11976, Street:'La Calle', City: 'Trujillo Alto', State: 'PR',  Date:myDate()}, Grades:[2,2,3]}];     // Crim's info.

    function showInfo (arr) {            // loops through the array to show the info within the array.

        arr.forEach(function(e){

             for (var key in e ) { console.log (key, e[key]);} })

    }

    showInfo(students);

function addStudent(n,a,c,s,g1,g2,g3){
    var obj     = {};
    obj.Name    = n;
    obj.Address = {Street:a, City:c, State:s};
    obj.gpa     = [g1,g2,g3];
    obj.day     = myDate();
    students.push(obj);
}

   console.log('------------------------Adding student');


     addStudent('Bob','Place','There','Somewhere',2.2,3.1,2);  // adds the student to the array

    showInfo(students); // Shows the info of students

    function avg (myArray) {

        var myTotal=0;

        myArray.forEach(function (e) { myAverage+=e});

        var myAverage= myTotal/myArray.length;

        return myAverage;

    }


    function myData(arr){

        var i=0;

        var button = document.querySelector(".buttonred");  // if there was an ID you would use #
            button.addEventListener("click", onClick);      // the ".button" could be a div, could be anything on your html. Explorer 9 or higher.
            function onClick () {return i++}

       document.querySelector('#name')   .innerHTML=arr[i].Name ;
       document.querySelector('#address').innerHTML=arr[i].Address ;
       document.querySelector('#gpa')    .innerHTML=arr[i].Grades ;
       document.querySelector('#date')   .innerHTML=arr[i].Date ;
//     document.querySelector('gpaavg')  .innerHTML=students[i]. ;


    }



    myData(students);

    avg(students);




    //data.push(students[key]);



//else{button.onclick= "return false";
//document.querySelector('.buttonred').innerHTML= 'Done!!!';}


//innerHtml = add for in loop info to feed the displaydata ( html informatio )
//create the function that we used for the weather  & date
//



})();