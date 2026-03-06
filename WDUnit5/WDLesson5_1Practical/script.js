/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/

function calcComp(){
      let P = parseFloat(document.getElementById("IPB").value);
      let R = parseFloat(document.getElementById("Rate").value);
      let N = parseInt(document.getElementById("Frequency").value);
      let T = parseInt(document.getElementById("Time").value);
      let op = document.getElementById("output");
      let build = "";
      for(let yrs = 1;yrs <= T; yrs+=1){
        let a = P*Math.pow((1+(R/100)/N),N*yrs);
        a = a.toFixed(2);
        build += `Year ${yrs} is $ ${a}<br>`
      }
      let total = P*Math.pow((1+(R/100)/N),N*T)
      total = total.toFixed(2);
      op.innerHTML = `${build} Total = $${total}`;
}