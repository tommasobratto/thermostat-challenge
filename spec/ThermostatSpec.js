describe("thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
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
    var times = 11;
    var numTimesRun = 0;
    while ( numTimesRun < times ) {
      numTimesRun += 1;
      thermostat.decreaseTemperature(); 
    }
    expect(thermostat.minimumTemperature()).toEqual(true)
    expect(thermostat.temperature).toEqual(10)
  });

  it('should start with powerSaving(tm) switched on', function() {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('has a maximum temperature of 25 degrees if powerSaving(tm) is switched on', function() {    
    var times = 6;
    var numTimesRun = 0;
    while ( numTimesRun < times ) {
      numTimesRun += 1;
      thermostat.increaseTemperature(); 
    }  

    thermostat.maximumTemperatureCheck();
    expect(thermostat.maximumTemperature).toEqual(25)
    expect(thermostat.temperature).toEqual(25)

  });

  it('has a maximum temperature of 32 degrees if powerSaving(tm) is switched off', function() {
    thermostat.powerSavingOff()

    var times = 13;
    var numTimesRun = 0;
    while ( numTimesRun < times ) {
      numTimesRun += 1;
      thermostat.increaseTemperature(); 
    }  

    thermostat.maximumTemperatureCheck();
    expect(thermostat.maximumTemperature).toEqual(32)
    expect(thermostat.temperature).toEqual(32)
  });
});
