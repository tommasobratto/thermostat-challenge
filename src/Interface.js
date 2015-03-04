  var thermostat = new Thermostat();

  $(document).ready(function () {

  $('#thermostat').text( thermostat.temperature);
  $('.increase').click(function() {
    thermostat.increaseTemperature()
    thermostat.maximumTemperatureCheck()
  $('#thermostat').text(thermostat.temperature);
  $('.decrease').click(function() {
    thermostat.decreaseTemperature()
    thermostat.minimumTemperatureCheck()
  $('#thermostat').text(thermostat.temperature);
    });
  });
});