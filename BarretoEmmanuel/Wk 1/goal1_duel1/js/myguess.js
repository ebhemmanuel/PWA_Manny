/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 10/15/13
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var dom = {  input:document.querySelector('#input' ),   // Input field info
                output:document.querySelector('#output'),   // P tag
                button:document.querySelector('button')};   // On click button

    var data='';
    var name='Emmanuel';

    function onClick(){

           data = dom.input.value; //whatever the user typed into the input
        if(data===name) {dom.output.innerHTML='Pfff';}
      else{dom.output.innerHTML='Don\'t even';} // adds the text to a P tag
           dom.button.removeEventListener('click',onClick);}
           dom.button.addEventListener('click',onClick); // run the function forever until you remove the event.

})();