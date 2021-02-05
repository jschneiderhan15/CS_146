var result = "";
var current0p = "";
var buffer = "";
var otpt = document.getElementById("output");
otpt.innerHTML = 0;

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   result = "";
   current0p = "";
   buffer = "";
   otpt.innerHTML = 0;
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
      if(otpt.innerHTML == 0)
            otpt.innerHTML = str;
      else
            otpt.innerHTML += str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return parseInt(result);
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   if(parseInt(result + num) <= 999999999){
      if(parseInt(result - num) >= -999999999){
         if (parseInt(result) > 999999999)
            result = 999999999
         setDisplay(num.toString());
         result += num;
      }
   }
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if(current0p == "")
   {
      buffer = result;
      current0p = op;
      result = "";
      otpt.innerHTML = 0;
   }
   else
      current0p = op;
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if(current0p == '+')
   {
      result = parseInt(buffer) + parseInt(result);
      if(result > 999999999)
         result = 999999999;
      if(result < -999999999)
         result = -999999999
      otpt.innerHTML = getResult();
      current0p = "";
   }
   else if(current0p == '-')
   {
      result = parseInt(buffer) - parseInt(result);
      if(result > 999999999)
         result = 999999999;
      if(result < -999999999)
         result = -999999999;
      otpt.innerHTML = getResult();
      current0p = "";
   }
   else if(current0p == '*')
   {
      result = parseInt(buffer) * parseInt(result);
      if(result > 999999999)
         result = 999999999;
      if(result < -999999999)
         result = -999999999;
      otpt.innerHTML = getResult();
      current0p = "";
   }
   else if(current0p == '/')
   {
      if(result == '0' && buffer == '0')
      {
         result = "ERROR";
         otpt.innerHTML = result;
         current0p = "";
      }
      else
      {
         result = parseInt(buffer) / parseInt(result);
         if(result > 999999999)
            result = 999999999;
         if(result < -999999999)
            result = -999999999;
         var presult = '' + result;
         if(presult.length > 9)
            result = result.toFixed(9);
         otpt.innerHTML = result;
         current0p = "";
      }
   }  

}