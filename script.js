
 function Rand_Number(){
    var randno=Math.floor((Math.random()*6)+1);
    return randno;
 }
 function diceicon(n){
    var randnum=n;
    if(randnum==1){
       randnum="dice fa-solid fa-dice-one";
    }
    else if(randnum==2){
       randnum="dice fa-solid fa-dice-two";
    }
    else if(randnum==3){
       randnum="dice fa-solid fa-dice-three";
    }
    else if(randnum==4){
       randnum="dice fa-solid fa-dice-four";
    }
    else if(randnum==5){
       randnum="dice fa-solid fa-dice-five";
    }
    else{
       randnum="dice fa-solid fa-dice-six";
    }
    return randnum;
 }
 function refresh(){
   var num1=Rand_Number();
   var newdice1=diceicon(num1);
   var num2=Rand_Number();
   var newdice2=diceicon(num2);
   var ply1 =document.getElementById("dice1").className=newdice1;
   var ply2 =document.getElementById("dice2").className=newdice2;
   if(num1>num2){
    document.getElementById("result").innerHTML="Player 1 wins";
   }
   else if(num1<num2){
    document.getElementById("result").innerHTML="Player 2 wins";
   }
   else{
    document.getElementById("result").innerHTML="OOPS Draw";
   }
 }

