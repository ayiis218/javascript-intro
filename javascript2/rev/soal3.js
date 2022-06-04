//deklarasi data array
let data = [2,13,5,16,8,9,23,14,7,21,17,6]
let data2 = [2, 25, 4]
let data3 = [2, 25, 4, 14, 'pijar', 'camp', 8]
function search (nilaiAwal, nilaiAkhir, array){
    //pemanggilan soal
    let seleksi = console.log(`Seleksi Nilai (${nilaiAwal},${nilaiAkhir},`,array,`)`)
    //membuat validasi bahwa data input harus bersifat number
    if( typeof nilaiAwal === typeof 'string' || typeof nilaiAkhir === typeof 'string' ){
        console.log('Data yang di inputkan harus bersifat number')
    //membuat validasi bahwa data array harus bersifat number
    }else if(!array.every(a =>  typeof a === 'number')){
        console.log('Data array harus bersifat number')
    //membuat validasi jika data array kurang dari 5
    }else if(array.length <= 5){
        console.log('Jumlah data array harus lebih dari 5')
    //membuat validasi nilai awal harus lebih kecil dari nilai akhir
    }else if(nilaiAwal < nilaiAkhir){
        //melakukan proses pencarian data dari parameter yang di input
        let cari = array.filter(x => { return x > nilaiAwal && x < nilaiAkhir})
            //mengurutkan data array dari hasil pencarian secara naik
            cari.sort((a, b) => {return a - b})
            //membuat validasi apakah data ada atau tidak
            if(cari.length !== 0){
                seleksi
                console.log(cari)
            }else{
                seleksi
                console.log('Data tidak ditemukan', cari)
            }
    }else{
        seleksi
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
}

//perintah untuk menjalankan program
search(2,14, data)
search(10,5, data)
search(5, 17, data2)
search(17,20, data)
search('5', 20, data)
search(5, '20', data)
search(17, 20, data3)