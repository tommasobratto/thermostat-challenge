$(document).ready( function () { 

  var thermostat = new Thermostat();

  $('#thermostat').text( function() {
    thermostat.temperature;
  });

  $('.increase temperature').click(function() {
    thermostat.increaseTemperature();
    $('#thermostat').text()
  });

});