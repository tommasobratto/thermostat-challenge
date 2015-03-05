  var thermostat = new Thermostat();

  $(document).ready(function() {

  $('#thermostat').text(thermostat.temperature); 
    changeColor();

  $('.increase').click(function() {
    thermostat.increaseTemperature();
    changeColor();
  });
  
  $('.decrease').click(function() {
    thermostat.decreaseTemperature();
    changeColor();
  });

  $('.reset').click(function() { 
    thermostat.resetTemperature();
    changeColor();
  });

  $('.powerSavingOn').click(function() { 
    thermostat.powerSavingOn();
    changeColor();
  });

  $('.powerSavingOff').click(function() {
    thermostat.powerSavingOff();
    changeColor();
  });
    
});



function changeColor() {

  $('#thermostat').text(function() { 

    if(thermostat.powerUsage() === "low usage")
    $('#thermostat').css({color: "green"});

    if(thermostat.powerUsage() === "medium usage")
    $('#thermostat').css({color: "yellow"});

    if (thermostat.powerUsage() === "high usage")
    $('#thermostat').css({color: "red"});

    $('#thermostat').text(thermostat.temperature); 

  });

};
