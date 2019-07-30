// 1. Menyusun Barisan Bintang
var row1 = 5;
for (var i = 0; i < row1; i++) {
  console.log("*");
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = 5;
for (var i = 0; i < row2; i++) {
  var output = "";
  for (var j = 0; j < row2; j++) {
    output = output + "*";
  }
  console.log(output);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5;
for (var i = 0; i < row3; i++) {
  var output = "";
  for (var j = 0; j <= i; j++) {
    output = output + "*";
  }
  console.log(output);
}
