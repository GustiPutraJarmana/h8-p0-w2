var tanggal;
var bulan;
var tahun;

switch (true) {
  case tanggal >= 1 && tanggal <= 31:
    break;
  default:
    tanggal = "tanggal Invalid";
    break;
}

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    bulan = "Bulan Invalid";
    break;
}
switch (true) {
  case tahun >= 1900 && tahun <= 2200:
    break;
  default:
    tahun = "Tahun Invalid";
    break;
}
console.log(tanggal + " " + bulan + " " + tahun);
