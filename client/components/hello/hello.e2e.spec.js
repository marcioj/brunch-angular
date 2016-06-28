describe('main component', function () {

  it('should add a todo', function() {
    browser.get('http://localhost:5000');
    expect($('h1').getText()).toEqual('Hello world');
  });

});
