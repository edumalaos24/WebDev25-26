function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = '';
  build += `<div class = "card">
  <img src = "${school.image}">
  <h2> ${school.name}</h2>
  <p> ${school.address}</h2>
  `;
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":" Brent Faiyaz",
    "image":"https://upload.wikimedia.org/wikipedia/en/3/3b/Fuck_the_World_%28EP%29_cover.png",
    "album":"F*CK the World",
    "url":"https://open.spotify.com/album/3vi20DRHkqv4HyVg9Rt9wC",
    
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  let build = '';
  build += `<div class = card>
  <h1> ${artist.name}</h1>
  <img src = "${artist.image}">
  <h2> ${artist.album}</h2>
  <a href = "${artist.url}">Link</a>
  `
  output.innerHTML = build;
}