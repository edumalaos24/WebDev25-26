//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95

let data, info, leftPanel, mapObj; //global variables

async function init(){
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";
  //Challenge 5: Get the data using the API link and analyze it
  info = await fetch(link);
  data = await info.json();

  output = get("output");
  let build = "";
  let ct = 0;

  
  let leftPanel = get("leftPanel");
  let build = "";


  //Generate cards

  for(let i = 0; i < data.length; i+=1) {
    let mvc = data[i];
    build += card(mvc);
  }
  //Challenge 6: Build info cards with button to show map if lat and lon values exist
  for(let i = 0; i < data.length; i++){
    let mvc = data[i];
    if(mvc.latitude && mvc.longitude){
      build += `<input type="button" value="Map" onclick="showMap( ${mvc.latitude}, ${mvc.longitude} )">`;
    }
  }
  //Challenge 7: Display cards in the div with id "leftPanel"

  leftPanel.innerHTML = build;
  
}

//Challenge 8: Create a function filterByBoro() that retrieves the borough from the user via text input, filters the data and generates cards for this subset of the data.
function filterByBorough(){
  leftPanel = get("leftPanel");
  let boro = get("borough").value;
  let build = "";
  
  for(let i = 0; i < data.length; i+=1){
    let mvc = data[i];
    if(mvc.borough == boro){
      build += card(mvc);
    }
  }
  leftPanel.innerHTML = build;
}