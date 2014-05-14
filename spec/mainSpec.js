describe('Small Plugin', function() {

  var originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 300;
    smallPlugin($('#button'), $('#paragraph'));
  });

  it('hides the paragraph on click', function(done) {
    var length;
    $('#paragraph').show();

    $('#button').click();
    var localExpect = expect;
    setTimeout(function() {
      length = $('#paragraph:visible').length;
      localExpect(length).toEqual(0);
      done();

    }, 200);
  });

  it('shows the paragraph if previously hidden', function(done) {
    $('#paragraph').hide();

    $('#button').click();
    expect($('#paragraph:visible').length).toEqual(1);
    setTimeout(function() {
      done();
    }, 200);
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
