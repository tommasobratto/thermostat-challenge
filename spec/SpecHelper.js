var Helper = function() {
};

Helper.prototype.increaseTemperatureTimes = function(number) {
  var times = number;
  var numTimesRun = 0;
    
  while ( numTimesRun <= times ) {
    numTimesRun += 1;
    thermostat.increaseTemperature(); 
  }  
};

Helper.prototype.decreaseTemperatureTimes = function(number) {
  var times = number;
  var numTimesRun = 0;
    
  while ( numTimesRun <= times ) {
    numTimesRun += 1;
    thermostat.decreaseTemperature(); 
  }  
};