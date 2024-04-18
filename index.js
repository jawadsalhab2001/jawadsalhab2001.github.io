var x=document.getElementsByTagName("h4");
function card1(){
x[0].style.backgroudColor='yellow';    
}
function card2(){
x[1].style.backgroudColor='yellow';    
}
function card3(){
x[2].style.backgroudColor='yellow';    
}

function alertname()
        {
            if(checkpass())
            {
            var fname=document.forms[0].elements[0].value;
            var lname=document.forms[0].elements[1].value;
            var j=document.forms[0].elements[2].value;
            window.alert(fname+" "+lname+" "+j);
        }
        else 
        window.alert("Passwords doesnt match");
    }

function loadalert(){
    window.alert("Welcome to Suave furniture:\nCountry: Lebanon\nCurrency: $USD dollars")
}
var a;
function s(a){
    var x=document.getElementsByClassName("i1")[a];
    x.innerHTML="Item added to card";
}

function c(){
    document.getElementsByClassName("srchbar")=" ";
    
}

function newsletter(){
    window.alert("Thank you for subscribing to our newsletter.");

}

function myFunction() {
    var txt;
    if (confirm("Press Ok to confirm")) {
  
      txt = "Your membership account has been created";
  
    } else {
  
      txt = "Membership canceled";
  
    }
  
    document.getElementById("Test Confirm Box").innerHTML = txt;
  
  }
  
  function rem(a){
    var x= document.getElementsByClassName("i1")[a];
    x.innerHTML=" removed from card";
  }

  function login(){
    window.alert("Welcome Back to Suave");
  }

 function checkpass()
 {
    var y=document.forms[0].elements[4].value;
    var k=document.forms[0].elements[5].value;
    if(y==k)
    return true;
    else
    return false;
 }
  