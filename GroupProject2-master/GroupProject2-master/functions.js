function submitButton(){
  document.getElementsByClassName("subBut")[0].addEventListener("click", function(event){
    event.preventDefault()
  });
  validateForm();
}

function validateForm(){
  var fName = document.getElementById("firstName").value;
  var lName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  if(fName == "" || lName == "" || email == ""){
    alert("Missing Required Fields!")
  }else{
    changePage(fName);
  }
}

function changePage(fName){
  var div = document.getElementById("reportBody");
  div.innerHTML = "";
  var p = document.createElement('p');
  p.innerText = "Thank you for your feedback " + fName + "!";
  p.style.fontSize = "250%"
  div.appendChild(p);
}

function startTimerWasher(num){
    var ident = 'timer' + num.toString();
    var butt = 'but' + num.toString();
    document.getElementById(ident).innerHTML = 30 + ":" + 00;
    document.getElementById(butt).disabled = true;
    timerWasher(num);
}

function startTimerDryer(num, machineType){
    var ident = 'timer' + num.toString();
    var butt = 'but' + num.toString();
    document.getElementById(ident).innerHTML = 45 + ":" + 00;
    document.getElementById(butt).disabled = true;
    timerDryer(num);
}

function timerWasher(num, machineType) {
  var ident ='timer' + num.toString();
  var butt ='but' + num.toString();
  var presentTime = document.getElementById(ident).innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  m = timeArray[0];
  s = checkSecond((timeArray[1] - 1));
  if(s ==59){
    m = m -1;
  }

  document.getElementById(ident).innerHTML = m + ":" + s;
  if(checkZero(m, s))
  {
      document.getElementById(ident).innerHTML = '';
      document.getElementById(butt).disabled = false;
      return;
  }
  setTimeout(timerWasher, 1000, num);
  
}

function timerDryer(num) {
    var ident ='timer' + num.toString();
    var butt ='but' + num.toString();
    var presentTime = document.getElementById(ident).innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    m = timeArray[0];
    s = checkSecond((timeArray[1] - 1));
    if(s ==59){
      m = m -1;
    }
  
    document.getElementById(ident).innerHTML = m + ":" + s;
    if(checkZero(m, s))
    {
        document.getElementById(ident).innerHTML = '';
        document.getElementById(butt).disabled = false;
        return;
    }
    setTimeout(timerDryer, 1000, num);
    
  }

function checkSecond(sec) {
  if (sec < 10 && sec >= 0){
      sec = "0" + sec
    }
  if (sec < 0){
    sec = "59";
    }   
  return sec;
}

function checkZero(min, sec){
    if(sec == 0 && min == 0){
        return true;
    }
    else
        return false;
}