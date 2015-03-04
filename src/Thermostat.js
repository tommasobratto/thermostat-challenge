var Thermostat = function() {
  this.temperature = 20;
  this.powerSaving = true;
  this.maximumTemperature;
  this.setMaximumTemperature();
  this.MINIMUM_TEMPERATURE = 10;
};

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature -= 1;
};

Thermostat.prototype.minimumTemperatureCheck = function() {
  if(this.temperature < this.MINIMUM_TEMPERATURE)
    this.temperature = this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.setMaximumTemperature = function() {
  if(this.powerSaving === true) this.maximumTemperature = 25;
    else
  this.maximumTemperature = 32;
};

Thermostat.prototype.maximumTemperatureCheck = function() {
  if(this.temperature > this.maximumTemperature)
    this.temperature = this.maximumTemperature;
};

Thermostat.prototype.powerSavingOn = function(setMaximumTemperature) {
  this.powerSaving = true;
  this.setMaximumTemperature();
};

Thermostat.prototype.powerSavingOff = function(setMaximumTemperature) {
  this.powerSaving = false;
  this.setMaximumTemperature();
} ;

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20
};

Thermostat.prototype.powerUsage = function() {
  if (this.temperature < 18) return "low usage";
  if (this.temperature >= 18 && this.temperature < 25) return "medium usage";
  if (this.temperature >= 25) return "high usage";
};





