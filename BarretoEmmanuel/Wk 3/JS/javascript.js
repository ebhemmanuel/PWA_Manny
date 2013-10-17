/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 10/15/13
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var cars = [];

    function Car (s,m,c) {  // constructor function

        this.model= m;
        this.color= c;
        this.type = s;
        //p.push(this); this could run inside, but not a good practice.
    }



     var myCar = new Car();
     var hisCars = new Car('Bum','Bam','Brim');
     var themCars=[];

    cars.push(myCar,hisCars);

    cars = [new Car('Boom','Red','Ler'), new Car('Brim','Blam','Bloom')];

    cars.forEach(function(e){

        console.log(e.model);

    })



})();