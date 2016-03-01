const assert = require('assert');
const app = require('../server');
before(done => {
  this.port = 9876;
  this.server = app.listen(this.port, (err, result) => {
    if (err) { return done(err); }
    done();
  });
});

after(() => {
  this.server.close();
});

describe('Server', function(){

  it('should exist', function(){
    assert(app);
  })
})
