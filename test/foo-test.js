var tape = require("tape"),
    foo = require("../");

tape("Should return 42", function(test) {
  test.equal(foo.foo(), 42);
  test.end();
});
