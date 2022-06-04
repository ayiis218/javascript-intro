//menentukan data array
const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(kunci, jml, callback){
  /*   membuat validasi untuk mengecek apakah kata kunci bernilai string
    dan jumlah permintaan berupa angka dan tidak nol */
    if(typeof kunci !== typeof 'string' || typeof jml !== 'number'){
        return `periksa data input apakah sudah sesuai`
    }
    if (jml === 0){
        return 'permintaan anda salah'
    }
    //untuk melakukan pencarian data dari parameter yang di inputkan
    let tampil = nama.filter( x => { 
        return x.toLowerCase().indexOf(kunci.toLowerCase()) !== -1 })
        return callback(tampil, jml) //melakukan proses callback dari function fungsi
}

function cari(tampil, jml) {
    byk = tampil.length
    //melakukan validasi pengecekan jumlah data yng di inputkan parameter
    if(byk === 0){
        return 'Data yang di inginkan tidak ada'
    }else if(byk !== jml){
        if (byk > jml){  tampil.length -= byk - jml
            return tampil
        }else if(byk < jml){
            console.log('Data kurang dari permintaan')
            return tampil
        }
    }else{
        return tampil
    }
}
//perintah untuk menjalankan program
console.log(searchName('an', 2, cari))
console.log(searchName('bi', 2, cari))
console.log(searchName(123, 2, cari))
console.log(searchName('an', '4', cari))
console.log(searchName('bi', 0, cari))
console.log(searchName(123, null, cari))
