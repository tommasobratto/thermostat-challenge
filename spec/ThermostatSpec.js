describe("thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
    helper = new Helper();
  });

  it('has a starting temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('can have its temperature increased', function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21)
  });

  it('can have its temperature decreased', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19)
  });

  it('cannot go below 10 degrees', function() {
    helper.decreaseTemperatureTimes(11);

    expect(thermostat.minimumTemperature()).toEqual(true)
    expect(thermostat.temperature).toEqual(10)
  });

  it('should start with powerSaving(tm) switched on', function() {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('has a maximum temperature of 25 degrees if powerSaving(tm) is switched on', function() {    
    helper.increaseTemperatureTimes(6);

    thermostat.maximumTemperatureCheck();
    expect(thermostat.maximumTemperature).toEqual(25)
    expect(thermostat.temperature).toEqual(25)

  });

  it('has a maximum temperature of 32 degrees if powerSaving(tm) is switched off', function() {
    thermostat.powerSavingOff();

    helper.increaseTemperatureTimes(13);

    thermostat.maximumTemperatureCheck();
    expect(thermostat.maximumTemperature).toEqual(32)
    expect(thermostat.temperature).toEqual(32)
  });
});
