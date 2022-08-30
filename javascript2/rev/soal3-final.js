//deklarasi data array
let data = [2, 13, 5, 9, 14, 7, 17];
let data2 = [2, 25, 4];
let data3 = [2, 25, 4, 14, 'pijar', 'camp', 8];
function search(nilaiAwal, nilaiAkhir, array) {
   let selection = console.log(
      `Seleksi Nilai (${nilaiAwal},${nilaiAkhir}`,
      array,
      `)`
   ); // soal seleksi

   let score = typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number'; // pengecekan tipe data nilai
   let arrayData = !array.every((index) => typeof index === 'number'); // pengecekan tipe data data array

   if (score) {
      console.log('Data yang di inputkan harus bersifat number');
   } else if (arrayData) {
      console.log('Data array harus bersifat number');
   } else if (array.length <= 5) {
      console.log('Jumlah data array harus lebih dari 5');
   } else if (nilaiAwal < nilaiAkhir) {
      let search = array.filter((index) => {
         return index > nilaiAwal && index < nilaiAkhir;
      });
      search.sort((a, b) => {
         return a - b;
      });
      if (search.length !== 0) {
         selection;
         console.log(search);
      } else {
         selection;
         console.log('Data tidak ditemukan', search);
      }
   } else {
      selection;
      console.log('Nilai akhir harus lebih besar dari nilai awal');
   }
}

//perintah untuk menjalankan program
search(2, 14, data);
search(10, 5, data);
search(5, 17, data2);
search(17, 20, data);
search('5', 20, data);
search(5, '20', data);
search(17, 20, data3);
