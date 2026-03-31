/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = ["24.99", "49.99", "29.99", "699.99"];
let meat_titles = ["Beef Tips", "Brisket", "Ribeye", "Steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = ["19.99", "29.99", "39.99", "49.99", "19.99", "49.99" ];
let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];

let dessert_images = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = ["9.99", "9.99", "9.99"];
let dessert_titles = ["Flan", "Passionberry", "Oreocup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = "";
  for(let mv = 0; mv < meat_titles.length; mv++){
    build += `<div class = "card">
<h2> ${meat_titles[mv]}</h2>
<img src = "images/${meat_images[mv]}">
<p>$${meat_prices[mv]}</p>
</div>`;
  }
  m.innerHTML = build;
  build = "";
  for(let sv = 0; sv < seafood_titles.length; sv++){
    build += `<div class = "card">
<h2> ${seafood_titles[sv]}</h2>
<img src = "images/${seafood_images[sv]}">
<p>$${seafood_prices[sv]}</p>
</div>`;
  }
  s.innerHTML = build;
  build = "";
  for(let dv = 0; dv < dessert_titles.length; dv++){
    build += `<div class = "card">
    <h2> ${dessert_titles[dv]}</h2>
    <img src = "images/${dessert_images[dv]}">
    <p>$${dessert_prices[dv]}</p>
      </div>`;
  }
  d.innerHTML = build;
}
  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container.

  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.

  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.