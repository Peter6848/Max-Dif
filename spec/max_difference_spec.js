describe('max dif', function(){
  it('throws error if array length is < 2',function(){
    expect(maxDif([-5])).toContain('Array needs to contain at least two numbers');
  });
  it('returns null if array length is two and array[0] > array[1]', function(){
    expect(maxDif([10, 3])).toEqual(null);
  });
  it('finds max diffenece between integers in array', function(){
    expect(maxDif([1, 2, 3, 4, 5])).toEqual(4);
  });
  it('adds negative number to postive', function(){
    expect(maxDif([4, -5, 10])).toEqual(15);
  });
});
