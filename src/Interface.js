  var thermostat = new Thermostat();

  $(document).ready(function() {

  $('#thermostat').text(thermostat.temperature);
  
  $('.increase').click(function() {
    thermostat.increaseTemperature();
    thermostat.maximumTemperatureCheck();
    $('#thermostat').text(thermostat.temperature);
    
    $('#thermostat').text(function() { 

    if(thermostat.powerUsage() === "low usage")
    $('#thermostat').css({color: "green"});
    thermostat.temperature;

    if(thermostat.powerUsage() === "medium usage")
    $('#thermostat').css({color: "yellow"});
    thermostat.temperature;

    if (thermostat.powerUsage() === "high usage")
    $('#thermostat').css({color: "red"});
    thermostat.temperature;

    });

  });
  
  $('.decrease').click(function() {
    thermostat.decreaseTemperature();
    thermostat.minimumTemperatureCheck();
    $('#thermostat').text(thermostat.temperature);

    $('#thermostat').text(function() { 

    if(thermostat.powerUsage() === "low usage")
    $('#thermostat').css({color: "green"});
    thermostat.temperature;

    if(thermostat.powerUsage() === "medium usage")
    $('#thermostat').css({color: "yellow"});
    thermostat.temperature;

    if (thermostat.powerUsage() === "high usage")
    $('#thermostat').css({color: "red"});
    thermostat.temperature;

    });

  });

  $('.reset').click(function() { 
    thermostat.resetTemperature();
    $('#thermostat').text(thermostat.temperature);

    $('#thermostat').text(function() { 

    if(thermostat.powerUsage() === "low usage")
    $('#thermostat').css({color: "green"});
    thermostat.temperature;

    if(thermostat.powerUsage() === "medium usage")
    $('#thermostat').css({color: "yellow"});
    thermostat.temperature;

    if (thermostat.powerUsage() === "high usage")
    $('#thermostat').css({color: "red"});
    thermostat.temperature;

    });

  });

  $('.powerSavingOn').click(function() { 
    thermostat.powerSavingOn();
    thermostat.maximumTemperatureCheck();
    $('#thermostat').text(thermostat.temperature);
  });

  $('.powerSavingOff').click(function() {
    thermostat.powerSavingOff();
    thermostat.maximumTemperatureCheck();
    $('#thermostat').text(thermostat.temperature);
  });

  // how we can change the color and then call the method inside another one?

    $('#thermostat').text(function() { 

    if(thermostat.powerUsage() === "low usage")
    $('#thermostat').css({color: "green"});
    thermostat.temperature;

    if(thermostat.powerUsage() === "medium usage")
    $('#thermostat').css({color: "yellow"});
    thermostat.temperature;

    if (thermostat.powerUsage() === "high usage")
    $('#thermostat').css({color: "red"});
    thermostat.temperature;

  });
    
});