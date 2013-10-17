/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 9/12/13
 * Time: 8:29 PM
 * To change this template use File | Settings | File Templates.
 */
    //  Emmanuel Barreto // Thursday September 12, 2013 //
    //  Assignment 1
    //  Part 1/3 of series


    //----------------------------------------*************************************************//


    //----------Overview//


    // This whole functions encapsulates every action to run at the end.
    // What if I used two functions separately to create the elements needed to run under a console log.
    // An a more advanced expression could run the functions with a ternary expression.

    // var myRunTime= (playerOneHealth<1 ? playerTwoName+' Wins!' : ) +     // Outdated code
    // (playerTwoHealth<1 ? playerOneName+' Wins!'  : );                    // Outdated code

    // Math.floor will floor the result within the parenthesis.
    // Could be simplified by creating a function separately for this.
    // So the idea is to create separate pieces of code and then run them under one console.log


    //----------------------------------------*************************************************//


    //------------Start self-executing function//


    (function(){

    console.log("FIGHT!!!");


    //...................................................................//


    //Player function to push out status && results - Long Part//

            //-------------Damage Formula//

             function damage (max,min)
            {return Math.floor(Math.random() * (max - (max*.5)+min));}

            //-------------------------//

                var playerOneH = 100;
                var playerTwoH = 100;
                var playerOneName= 'Spider Man';
                var playerTwoName= 'Bat Man';

        var roundStart= alert(playerOneName + ":" + playerOneH + "  *START*  " + playerTwoName + ":" + playerTwoH);

//            console.log(roundStart);

    //...................................................................//

        var playerOneWins= 'Player Ones Wins';
        var playerTwoWins= 'Player Two Wins';
        var draw='Draw';

        var round     = 0 ;

                for (i=0; i<10; i++) {


//        /*else*/ if( playerOneH>1  && playerTwoH>1){returnLog = roundOver                }
                             if( playerTwoH<1)                 {alert('Player One Wins!'); break;}
                        else if( playerOneH<1)                 {alert('Player Two Wins!'); break;}

                        else if( playerTwoH<1  && playerOneH<1){alert('Draw!')           }


                        //...................................................................//



                    playerOneH-=damage(20,20);
                    playerTwoH-=damage(20,20);
                     round ++;
                    var endRound  = console.log(playerOneName +' '+ playerOneH + ' ' + playerTwoName + ' ' + playerTwoH);
                    var roundOver = alert(playerOneName + ":"+playerOneH+" *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoH);

//                    if ()

                }; //


    })();    // Closing bracket of the self-executing function


    //-----------------------------------------***********************************************//









//(function(){
//
//    console.log("FIGHT!!!");
//
//    //player name
//    var playerOneName   = "Spiderman";
//    var playerTwoName   = "Batman";
//
//    //player damage
//    var player1Damage   = 20;
//    var player2Damage   = 20;
//
//    //player health
//    var playerOneHealth = 100;
//    var playerTwoHealth = 100;
//
//    //initiate round
//    var round           =0;
//
//    function fight(){
//
//
//
//        // Calls out the state of the current name and health of both players.
//
//        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
//
//        //
//
//        for (var i = 0; i < 10; i++)
//        {
//            // random formula is - Math.floor(Math.random() * (max - min) + min);
//
//            var minDamage1 = player1Damage * .5;       //Pushes out 20 * .5
//            var minDamage2 = player2Damage * .5;       //Pushes out 20 * .5
//
//
//
//            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
//            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);
//
//            // f1 and f2 =  Floor it!( // 20 - (20 * .5) + (20 * .5) )
//
//            //inflict damage
//            playerOneHealth-=f1;
//            playerTwoHealth-=f2;
//
//            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
//
//            //check for victor
//            var result = winnerCheck();
//            console.log(result);
//            if (result==="no winner")
//            {
//                round++;
//                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
//
//
//
//            } else{
//                alert(result);
//                break;
//            };
//
//          };
//    };
//
//    function winnerCheck(){
//        var result="no winner";
//             if (playerOneHealth<1 && playerTwoHealth<1)  {result = "You Both Die";}
//        else if (playerOneHealth<1)                       {result =playerTwoName+" WINS!!!"
//        } else if (playerTwoHealth<1)
//        {
//            result = playerOneName+" WINS!!!"
//        };
//       return result;
//    };
//
//    /*******  The program gets started below *******/
//    fight();
//
//})();