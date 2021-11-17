function match(){

    var user=prompt("Pick Rock, Paper or Scissors!").toLowerCase();

    var computer=Math.floor(Math.random()*3);

    if (computer==0){
        computer="rock";
    }    
    else if(computer==1){
        computer="paper";
    }
    else if(computer==2){
        computer="scissors";
    }

    var result;

    if(user==computer){
        result="Tie!";
    } 
    else if(user=="rock"){
        if(computer=="paper"){
            result="Computer wins!";
        }
        else if(computer=="scissors"){
            result="You win!";
        }
    }    
    else if(user=="paper"){
        if(computer=="scissors"){
            result="Computer wins!";
        }
        else if(computer=="rock"){
            result="You win!";
        }
    }
    else if(user=="scissors"){
        if(computer=="rock"){
            result="Computer wins!";
        }
        else if(computer=="paper"){
            result="You win!";
        }
    }
    document.getElementById("randomholder").innerHTML=computer;
    document.getElementById("inputholder").innerHTML=user;
    document.getElementById("resultholder").innerHTML=result;

}



    



