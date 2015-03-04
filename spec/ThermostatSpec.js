describe("thermostat", function() {

  var thermostat = new Thermostat();

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

});
