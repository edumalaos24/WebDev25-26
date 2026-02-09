// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
  let l = (document.getElementById("length").value);
  let w = (document.getElementById("width").value);
  let op1 = document.getElementById("output1");
  let message = ""
    if (l <= 0||w <= 0){
  message = "Invalid measurement";
}else{
  let area = l*w;
  message = `The area of ${l} and ${w} is ${area}`;
}
  op1.innerHTML = `${message}`;
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let op2 = document.getElementById("output2");
  if (animal == 'Bear' && emotion == 'Funny'){
    image = <input src="funnyBear.jpg"></input>;
  }
  if (animal == 'Bear' && emotion == 'Sad'){
    image = <input src="sadBear.jpg"></input>;
  }
  if (animal == 'Cat' && emotion == 'Funny'){
    image = <input src="funnyCat.jpg"></input>;
  }
  if (animal == 'Cat' && emotion == 'Sad'){
    image = <input src="sadCat.jpg"></input>;
  }
  if (animal == 'Dog' && emotion == 'Funny'){
    image = <input src="funnyDog.jpg"></input>;
  }
  if (animal == 'Dog' && emotion == 'Sad'){
    image = <input src="sadDog.jpg"></input>;
  }
  op2.innerHTML = `${image}`
}