describe('First Test', () => {
  let testVar: any;

  beforeEach(() => {
    testVar = {};
  });

  it('should return true if `a` is true', () => {
    testVar.a = false;

    testVar.a = true;

    expect(testVar.a).toBe(true);
  });
});
