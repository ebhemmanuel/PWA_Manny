/**
 * Created with JetBrains WebStorm.
 * User: someoneelse
 * Date: 10/10/13
 * Time: 12:32 PM
 * To change this template use File | Settings | File Templates.
 */
console.log("started");

(function(){


    var gpaData     = [];
    var button   = [];
    var weather1 = {name:80,windSpeed:5,humidity:90, condition:"Sunny", location:"Orlando"};


    addCity(90,7,80,"stormy","miami");



    cities.push(weather1,weather2);
    function addCity(t,w,h,c,l){
        var obj = {};
        obj.temp = t;
        obj.windSpeed = w;
        obj.humidity = h;
        obj.condition = c;
        obj.location = l;
        cities.push(obj);
    }

    function avg (myArray) {

        var myTotal=0;

        myArray.forEach(function (e) { myAverage+=e});

        var myAverage= myTotal/myArray.length;

        return myAverage;

    }


    for (var key in weather ){
    var totalKeys=0;
        totalKeys++;
        gpaData.push(weather[key]);
    }
    //console.log(totalKeys);
    console.log(data);

})();
