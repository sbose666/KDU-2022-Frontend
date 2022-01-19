describe("square", function () {
  function makeTest(x) {
    let expected = Math.pow(x, 2);
    it(`${x} squared is ${expected}`, function () {
      assert.equal(square(x), expected);
    });
  }

  for (let x = 10; x <= 20; x++) {
    makeTest(x);
  }
  it(`Square of non number is NaN`, function () {
    assert.isNaN(square("hey"));
  });
  it(`Square of floating points is NaN`, function () {
    assert.isNaN(square(3.87));
  });
});

describe("cube", function () {
  function makeTest(x) {
    let expected = Math.pow(x, 3);
    it(`${x} cubed is ${expected}`, function () {
      assert.equal(cube(x), expected);
    });
  }

  for (let x = 10; x <= 20; x++) {
    makeTest(x);
  }

  it(`Cube of non number is NaN`, function () {
    assert.isNaN(cube("hey"));
  });
  it(`Cube of floating points is NaN`, function () {
    assert.isNaN(cube(3.87));
  });
});
