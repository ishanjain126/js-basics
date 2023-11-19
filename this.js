const obj = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    innerFunction: function () {
      return console.log(
        "Checking the scope of the inner nested function\n",
        this
      );

      /*
        {
            "a": 1,
            "b": 2,
            "c": 3,
            "d": 4,

        }
        */
    },
  },
  outerFunction: function () {
    return console.log("Checking the scope of the outer function\n", this);
  },

  /*
    {
      "data": {
          "a": 1,
          "b": 2,
          "c": 3,
          "d": 4
        }
    }
  */
};

obj.data.innerFunction();
obj.outerFunction();
