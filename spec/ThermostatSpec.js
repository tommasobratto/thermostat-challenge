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
    var num = 0;
    while ( num < times ) {
      num += 1;
      thermostat.decreaseTemperature(); 
    }
    expect(thermostat.minimumTemperature()).toEqual(true)
    expect(thermostat.temperature).toEqual(10)
  });

});
