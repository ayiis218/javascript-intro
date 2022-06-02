//menentukan data array
const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(kunci, jml, callback){
    //untuk melakukan pencarian data dari parameter yang di inputkan
    let tampil = nama.filter( x => { 
        return x.toLowerCase().indexOf(kunci.toLowerCase()) !== -1 })
        return callback(tampil, jml) //melakukan proses callback dari function fungsi
}

function cari(tampil, jml) {
    byk = tampil.length
    //melakukan validasi pengecekan jumlah data yng di inputkan parameter
    if(byk === 0){
        return "data tidak ada"
    }else if(byk !== jml){
        if (byk > jml){  tampil.length -= byk - jml
            return tampil
        }else if(byk < jml){
            return "data kurang dari permintaan", tampil
        }
    }else{
        return tampil
    }
}
//perintah untuk menjalankan program
// console.log(searchName("an", 4, cari))
console.log(searchName('li', 4, cari));
