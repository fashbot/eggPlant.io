const testing = require('./Matchers').testing;
const checks =  require('./Matchers').checks;
const expect = require('./Matchers').expect;

//create Test stack

testing('x', () => {

  checks('if', () => {
    expect(1).toBe(0);
  })

  checks('if x', () => {
    var x = "legs"
    expect(x).toBeOfType('cheese');
  })

  checks('if x', () => {
    expect(1).toBe(1);
  })

  checks('if d', () => {
    expect(1).toBe(0);
  })

})

testing('A', () => {

  checks('if', () => {
    expect(1).toBe(0);
  })

  checks('if x', () => {
    var x = "tomato"
    expect(x).toBeOfType('cheese');
  })

  checks('TEST', () => {
    const x =  2 + 4
    expect(x).toBe(1);
  })

  checks('if d', () => {
    expect(1).toBe(0);
  })

  checks('greater than', () => {
    expect(1).toBeGreaterThanOrEqualsTo(3);
  });

})
