let data = [2,13,5,16,8,9,23,14,7,21,17,6] //deklarasi data array
function search (nilaiAwal, nilaiAkhir, array){
//membuat validasi nilai awal harus lebih kecil dari nilai akhir
let seleksi = console.log(`Seleksi Nilai (${nilaiAwal},${nilaiAkhir},`,array,`)`)
    if(nilaiAwal < nilaiAkhir){
        //melakukan proses pencarian data dari parameter yang di input
        let cari = array.filter((x) => { return x > nilaiAwal && x < nilaiAkhir})
            jumlah = cari.length //banyak data array
            //mengurutkan data array dari hasil pencarian
            cari.sort((a, b) => {return a - b})
            //membuat validasi data lebih dari 5
            if(jumlah >= 5){
                seleksi
                console.log(cari)
            }else if(jumlah >1){
                seleksi
                console.log('Jumlah angka dalam data harus lebih dari 5')
            }else{
                seleksi
                console.log(`Data tidak ditemukan`)
            }
    }else{
        seleksi
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
}

//perintah untuk menjalankan program
search(2,14, data)
// search(10,5, data)
// search(2,8, data)
// search(17,20, data)
