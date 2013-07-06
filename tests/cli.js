var test = require('tap').test;

test("CLI Tests", function (t) {
  t.ok(true, "this is always true")
  t.notOk(false, "this is never true")
  // end lets it know it's over.
  t.end()
})
