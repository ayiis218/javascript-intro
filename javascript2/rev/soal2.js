const name = [
   'Abigail',
   'Alexandra',
   'Alison',
   'Amanda',
   'Angela',
   'Bella',
   'Carol',
   'Caroline',
   'Carolyn',
   'Deirdre',
   'Diana',
   'Elizabeth',
   'Ella',
   'Faith',
   'Olivia',
   'Penelope',
];

function searchName(key, limit, callback) {
   if (
      typeof key !== typeof 'string' ||
      typeof limit !== 'number' ||
      !callback ||
      limit < 1
   ) {
      return `Data harus berupa string dan limit harus bertipe number dan lebih dari nol`;
   }

   //untuk melakukan pencarian data dari parameter yang di inputkan
   let filter = name.filter((e) => {
      return e.toLowerCase().indexOf(key.toLowerCase()) !== -1;
   });
   return callback(filter, limit); //melakukan proses callback dari function fungsi
}

function search(filter, limit) {
   const data = filter.length;
   //melakukan validasi pengecekan jumlah data yng di inputkan parameter
   if (data <= 0) {
      return 'Data yang di inginkan tidak ada';
   } else if (data !== limit) {
      if (data > limit) {
         filter.length -= data - limit;
         return filter;
      } else if (data < limit) {
         console.log('Data kurang dari permintaan');
         return filter;
      }
   } else {
      return filter.slice(0, limit);
   }
}
//perintah untuk menjalankan program
console.log(searchName('an', 2));
console.log(searchName('an', 2, search));
console.log(searchName('bi', 2, search));
console.log(searchName(123, 2, search));
console.log(searchName('an', '4', search));
console.log(searchName('bi', -2, search));
