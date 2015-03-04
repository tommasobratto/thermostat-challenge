  var thermostat = new Thermostat();

  $(document).ready(function () {

  $('#thermostat').text( thermostat.temperature);
  
  $('.increase').click(function() {
    thermostat.increaseTemperature();
    thermostat.maximumTemperatureCheck();
  $('#thermostat').text(thermostat.temperature);
  });
  
  $('.decrease').click(function() {
    thermostat.decreaseTemperature();
    thermostat.minimumTemperatureCheck();
  $('#thermostat').text(thermostat.temperature);
  });

  $('.reset').click(function () { 
    thermostat.resetTemperature();
    $('#thermostat').text(thermostat.temperature);
  })

  $('.powerSavingOn').click(function () { 
    thermostat.powerSavingOn();
    thermostat.maximumTemperatureCheck();
    $('#thermostat').text(thermostat.temperature);
  })

  $('.powerSavingOff').click(function () {
    thermostat.powerSavingOff();
    thermostat.maximumTemperatureCheck();
    $('#thermostat').text(thermostat.temperature);
  });

});