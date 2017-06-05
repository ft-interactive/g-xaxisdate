var tape = require("tape"),
    axis = require("../");

tape("Should return 42", function(test) {
  test.equal(axis.xaxisDate().tickSize(), 10);
  test.end();
});
