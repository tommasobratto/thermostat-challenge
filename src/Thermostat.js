var Thermostat = function() {
  this.temperature = 20;
  this.powerSaving = true;
  this.maximumTemperature;
  this.setMaximumTemperature();
  this.MINIMUM_TEMPERATURE = 10;
};

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;
  this.maximumTemperatureCheck();
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature -= 1;
  this.minimumTemperatureCheck();
};

Thermostat.prototype.minimumTemperatureCheck = function() {
  if(this.temperature < this.MINIMUM_TEMPERATURE)
    this.temperature = this.MINIMUM_TEMPERATURE;
    this.powerUsage();
};

Thermostat.prototype.setMaximumTemperature = function() {
  if(this.powerSaving === true) this.maximumTemperature = 25;
    else
  this.maximumTemperature = 32;
  this.maximumTemperatureCheck();
};

Thermostat.prototype.maximumTemperatureCheck = function() {
  if(this.temperature > this.maximumTemperature)
    this.temperature = this.maximumTemperature;
    this.powerUsage();
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
  this.setMaximumTemperature();
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
  this.setMaximumTemperature();
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20
  this.powerUsage();
};

Thermostat.prototype.powerUsage = function() {
  if (this.temperature < 18) return "low usage";
  if (this.temperature >= 18 && this.temperature < 25) return "medium usage";
  if (this.temperature >= 25) return "high usage";
};





