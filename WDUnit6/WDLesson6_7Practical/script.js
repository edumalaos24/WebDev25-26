let data, info;

async function init(){   
  let link = "nycmvc.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.borough}</h3>
                    <hr>
                    <p>${crash.crash_date}</p>
                    <p>ZIP: ${crash.zip_code}</p>
                    <p>${crash.on_street_name}</p>
                    <p>Killed: ${crash.number_of_persons_killed}</p>
                    <p>Injured: ${crash.number_of_persons_injured}</p>
                    <hr>
              </div>`    
  }
  output.innerHTML = build;
}

function filterByCrashDate(){
  let output = document.getElementById("output");
  let crashyear = document.getElementById("crash_year");
  let crashmonth = document.getElementById("crash_month");
  let crashday = document.getElementById("crash_day");
  let result = document.getElementById("result");
  let crash_date = `${crashyear}-${crashmonth}-${crashday}T00:00:00.000`;
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.crash_date == crash_date){
      build += `<div class="fitted card">
                    <h3>${crash.borough}</h3>
                    <hr>
                    <p>${crash.crash_date}</p>
                    <p>ZIP: ${crash.zip_code}</p>
                    <p>${crash.on_street_name}</p>
                    <p>Killed: ${crash.number_of_persons_killed}</p>
                    <p>Injured: ${crash.number_of_persons_injured}</p>
                    <hr>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.borough == borough){
      build += `<div class="fitted card">
                    <h3>${crash.borough}</h3>
                    <hr>
                    <p>${crash.crash_date}</p>
                    <p>ZIP: ${crash.zip_code}</p>
                    <p>${crash.on_street_name}</p>
                    <p>Killed: ${crash.number_of_persons_killed}</p>
                    <p>Injured: ${crash.number_of_persons_injured}</p>
                    <hr>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByZIP_Code(){
  let output = document.getElementById("output");
  let zip_code = document.getElementById("zip_code").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.incident_zip == zip_code){
      build += `<div class="fitted card">
                    <h3>${crash.borough}</h3>
                    <hr>
                    <p>${crash.crash_date}</p>
                    <p>ZIP: ${crash.zip_code}</p>
                    <p>${crash.on_street_name}</p>
                    <p>Killed: ${crash.number_of_persons_killed}</p>
                    <p>Injured: ${crash.number_of_persons_injured}</p>
                    <hr>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.

function filterByStreetName(){
  let output = document.getElementById("output");
  let on_street_name = document.getElementById("on_street_name").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.on_street_name == on_street_name){
      build += `<div class="fitted card">
                    <h3>${crash.borough}</h3>
                    <hr>
                    <p>${crash.crash_date}</p>
                    <p>ZIP: ${crash.zip_code}</p>
                    <p>${crash.on_street_name}</p>
                    <p>Killed: ${crash.number_of_persons_killed}</p>
                    <p>Injured: ${crash.number_of_persons_injured}</p>
                    <hr>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByNumberOfPersonsKilled(){
  let output = document.getElementById("output");
  let number_of_persons_killed = document.getElementById("number_of_persons_killed").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.number_of_persons_killed == number_of_persons_killed){
      build += `<div class="fitted card">
                    <h3>${crash.borough}</h3>
                    <hr>
                    <p>${crash.crash_date}</p>
                    <p>ZIP: ${crash.zip_code}</p>
                    <p>${crash.on_street_name}</p>
                    <p>Killed: ${crash.number_of_persons_killed}</p>
                    <p>Injured: ${crash.number_of_persons_injured}</p>
                    <hr>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByNumberOfPersonsInjured(){
  let output = document.getElementById("output");
  let number_of_persons_injured = document.getElementById("number_of_persons_injured").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.number_of_persons_injured == number_of_persons_injured){
      build += `<div class="fitted card">
                    <h3>${crash.borough}</h3>
                    <hr>
                    <p>${crash.crash_date}</p>
                    <p>ZIP: ${crash.zip_code}</p>
                    <p>${crash.on_street_name}</p>
                    <p>Killed: ${crash.number_of_persons_killed}</p>
                    <p>Injured: ${crash.number_of_persons_injured}</p>
                    <hr>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}