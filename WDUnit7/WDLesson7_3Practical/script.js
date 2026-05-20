//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
//global variables
let data, info, output;

async function init(){
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data); 
}

function accidentsByBorough(){
  //Variables to keep count of accidents by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;

  //Tallying the count of accidents by borough
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == "QUEENS"){
      q++;
    }else if(accident.borough == "MANHATTAN"){
      m++;
    }else if(accident.borough == "BROOKLYN"){
      bk++;
    }else if(accident.borough == "BRONX"){
      bx++;
    }else if(accident.borough == "STATEN ISLAND"){
      s++;
    }
  }

  //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];

  //Retrieving chart type from user's selection of drop-down
  let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType)
}

function accidentsByVehicle(){
  //Challenge: Create the same functionality as in the function accidentsByVehicle() above, except you will be aggregating for the following vehicle types: 'Sedan', 'Station Wagon/Sport Utility Vehicle', 'Taxi', 'Bus', 'Motorcycle' and "Other".  "Other" isn't a vehicle type but simply meant to capture all other vehicles.
  //Variables to keep count of vehicles by type

  let Sedan = 0, SUV = 0, Taxi = 0, Bus = 0, Motorcycle = 0, Other = 0

  //Tally the count of vehicles by type using decisions

  for(let i = 0; i < data.length; i++){
    let mvc = data[i];
    if(mvc.vehicle_type_code1 == "Sedan"|| mvc.vehicle_type_code2 == "Sedan" || mvc.vehicle_type_code3 == "Sedan"){
      Sedan++;
    }else if(mvc.vehicle_type_code1 == "SUV"|| mvc.vehicle_type_code2 == "SUV" || mvc.vehicle_type_code3 == "SUV"){
      SUV++;
    }else if(mvc.vehicle_type_code1 == "Taxi"|| mvc.vehicle_type_code2 == "Taxi" || mvc.vehicle_type_code3 == "Taxi"){
      Taxi++;
    }else if(mvc.vehicle_type_code1 == "Bus"|| mvc.vehicle_type_code2 == "Bus" || mvc.vehicle_type_code3 == "Bus"){
      Bus++;
    }else if(mvc.vehicle_type_code1 == "Motorcycle"|| mvc.vehicle_type_code2 == "Motorcycle" || mvc.vehicle_type_code3 == "Motorcycle"){
      Motorcycle++;
    }else if(mvc.vehicle_type_code1 == "Other"|| mvc.vehicle_type_code2 == "Other" || mvc.vehicle_type_code3 == "Other"){
      Other++;
    };
  }


  //Create data for chart (as array of arrays) with 1st position of array being label

  let chartData = [
    ["Sedan", Sedan],
    ["SUV", SUV],
    ["Taxi", Taxi],
    ["Bus", Bus],
    ["Motorcycle", Motorcycle],
    ["Other", Other]
  ];
  
  //Retrieve chart type from user's selection of drop-down
  let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType);

}
