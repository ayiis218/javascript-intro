// Contoh Method Javascript (Built-in Functions)

/* 1. valueOf()
digunakan untuk mengembalikan suatu nilai yang dipakai */
const buah = ['Banana', 'Orange', 'Apple', 'Mango']
let nilai = buah.valueOf()
console.log(nilai)

/* 2. unshift()
menambahkan satu atau lebih elemen ke depan array dan mengembalikan panjang array yang baru. */
buah.unshift('Lemon')
console.log(buah)

/* 3. push()
menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru. */
buah.push('Kiwi', 'Anggur')
console.log(buah)

/* 4. every() 
mendeteksi apakah setiap elemen memenuhi syarat pengujian */
const umur = [19, 21, 23, 25];
function cek (x) {
    return x > 21
}
let umr = umur.every(cek);
console.log(umr);

/* 5. filter()
membuat sebuah array baru dengan semua elemen array ini yang mengembalikan nilai benar oleh fungsi pemfilteran yang disediakan. */
const warna = ['Merah', 'Jingga', 'Kuning', 'Hijau', 'Biru', 'Nila', 'Unggu']
let cari = warna.filter(x => {
    return x.toLowerCase().indexOf('ng'.toLowerCase()) !== -1})
    console.log(cari);

/* 6. find()
untuk mencari data array dengan index pertama yang sesuai dengan kondisi yang dicari  */
const nomor = [1, 12, 23, 34, 45]
let find = nomor.find( x => {
    return x % 2 == 0 })
console.log(find)

/* 7.shift()
menghapus index pertama dari array dan mengembalikkannya */
const first = nomor.shift();
console.log(first);

/* 8. pop()
menghapus indek terakhir dari array dan mengembalikkannya */
const last = nomor.pop();
console.log(last);

/* 9. setDate()
mengatur hari dalam sebulan untuk tanggal yang ditentukan menurut waktu setempat. */
let hari = new Date()
hari.setDate(28)
    console.log(hari)

/* 10. toString()
mengembalikan bentuk string dari tanggal yang ditentukan */
var dateobject = new Date()
    stringobj = dateobject.toString();
console.log(stringobj)