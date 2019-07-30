// 1. Melakukan Looping Menggunakan While
console.log("LOOPING PERTAMA");
var pertama = 0;

while (pertama < 19) {
  pertama = pertama + 2;
  console.log(pertama + " - I love coding");
}
console.log("LOOPING KEDUA");
var kedua = 22;
while (kedua > 2) {
  kedua = kedua - 2;
  console.log(kedua + " - I will become fullstack developer");
}

// 2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA");
for (var pertama = 0; pertama < 21; pertama++) {
  console.log(pertama + " - I love coding");
}
console.log("LOOPING KEDUA");
for (var kedua = 20; kedua > 0; kedua--) {
  console.log(kedua + " - I will become fullstack developer");
}

// 3. Angka Ganjil dan Genap

for (var angka = 1; angka <= 100; angka++) {
  if (angka % 2 == 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
}

for (var perulangan = 1; perulangan <= 100; perulangan = perulangan + 2) {
  if (perulangan % 3 === 0) {
    console.log(perulangan + " KELIPATAN 3");
  } else {
    console.log('""');
  }
}

for (var perulangan = 1; perulangan <= 100; perulangan = perulangan + 5) {
  if (perulangan % 6 === 0) {
    console.log(perulangan + " KELIPATAN 6");
  } else {
    console.log('""');
  }
}
for (var perulangan = 1; perulangan <= 100; perulangan = perulangan + 9) {
  if (perulangan % 10 === 0) {
    console.log(perulangan + " KELIPATAN 10");
  } else {
    console.log('""');
  }
}