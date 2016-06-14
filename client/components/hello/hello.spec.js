describe('main component', function () {
  beforeEach(module('app'));

  it('works', inject(function ($componentController) {
    let controller = $componentController('hello');
    expect(controller.message).toEqual('world');
  }));

});
