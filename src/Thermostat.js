var Thermostat = function() {
  this.temperature = 20;
  this.powerSaving = true;
  this.maximumTemperature; 
  this.setMaximumTemperature();
};

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature -= 1;
};

Thermostat.prototype.minimumTemperature = function() {
  if(this.temperature < 10) this.temperature = 10;
    return true;
};

Thermostat.prototype.setMaximumTemperature = function() {
  if(this.powerSaving === true) this.maximumTemperature = 25;
    else 
    this.maximumTemperature = 32;
};

Thermostat.prototype.maximumTemperatureCheck = function() {
  if(this.temperature > this.maximumTemperature) 
    this.temperature = this.maximumTemperature;
  return true
};

Thermostat.prototype.powerSavingOn = function(setMaximumTemperature) {
  this.powerSaving = true;
  this.setMaximumTemperature();
};

Thermostat.prototype.powerSavingOff = function(setMaximumTemperature) {
  this.powerSaving = false;
  this.setMaximumTemperature();
} 