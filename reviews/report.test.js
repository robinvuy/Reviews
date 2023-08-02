const report = require('./report');

describe ('report', () => {

  it('returns Green', () => {
    expect(report("Green")).toContain("Green"); 
  }); 

  it('return Amber', () => {
    expect(report("Amber")).toContain("Amber"); 
  });

  it('return Red', () => {
    expect(report("Red")).toContain("Red"); 
  });

  it('returns a string containing correct single colours and numbers', () => {
    const result = report("Green, Amber, Red");
    const expected = "Green: 1\nAmber: 1\nRed: 1"
    expect(result).toEqual(expected);
  });
  
  it('returns correct number of same input colour', () => {
    expect(report("Green, Green")).toEqual("Green: 2");
  });

  it('returns correct number of two input colours', () => {
    expect(report("Green, Green, Amber")).toEqual("Green: 2\nAmber: 1");
  });

  it('returns correctly formatted report', () => {
    const result = report("Green, Green, Amber, Red, Green");
    expect(result).toEqual("Green: 3\nAmber: 1\nRed: 1");
  })




  

  



})