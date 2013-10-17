/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 10/15/13
 * Time: 11:32 AM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 10/15/13
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var interval= setInterval(update, 1000/60);   // 1000 miliseconds is 1 second.

    clearInterval(interval);  // Stops the interval from running

    function Car (m,c,s) {  // constructor function

        this.model= m;
        this.color= c;
        this.type = s;
        //p.push(this); this could run inside, but not a good practice.
    }

    Car.prototype.update = function() {

        console.log(this.name+"'s car is moving");
    };

    Car.prototype.stop = function () {

        console.log("stopping!!!!");
    };


    function update () {

        cars.forEach(function(e){

            e.update();

        });

//        console.log("I'm running.........")

    }


    for (var i=0; i<50; i++){

        var car = new Car('car'+i,'red','wheel')
        var cars = [];

            cars.push(car);
    }

//
//    var myCar = new Car('Bush','Bash',"blar");
//    var hisCars = new Car('Bum','Bam','Brim');
//    var themCars=[];
//
//    cars.push(myCar,hisCars);
//
//    cars = [new Car('Boom','Red','Ler'), new Car('Brim','Blam','Bloom')];

//        myCar.move();


//    cars.forEach(function(e){
//
//        console.log(e.model);
//
//    })



})();