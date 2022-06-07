//deklarasi data array
let data  = [2, 13, 5, 9, 14, 7, 17]
let data2 = [2, 25, 4]
let data3 = [2, 25, 4, 14, 'pijar', 'camp', 8]
function search (nilaiAwal, nilaiAkhir, array){
    let seleksiSoal = console.log( `Seleksi Nilai (${nilaiAwal},${nilaiAkhir}`,array,`)` )            // soal seleksi

    let nilaiA = typeof nilaiAwal === typeof 'string'
    let nilaiAk = typeof nilaiAkhir === typeof 'string'

    let nilaiString = nilaiA || nilaiAk                                                 // pengecekan tipe data nilai
    let arrayString = !array.every( index =>  typeof index === 'number')                // pengecekan tipe data data array
    // validasi data string
    if(nilaiString){
        console.log('Data yang di inputkan harus bersifat number')
    // validasi data string
    }else if(arrayString){
        console.log('Data array harus bersifat number')
    // validasi jumlah data array
    }else if(array.length <= 5){
        console.log('Jumlah data array harus lebih dari 5')
    // validasi perbandingan niali
    }else if(nilaiAwal < nilaiAkhir){
        // proses pencarian data dari parameter yang di input
        let cari = array.filter( index => { return index > nilaiAwal && index < nilaiAkhir})
            // mengurutkan data array hasil pencarian
            cari.sort((a, b) => {return a - b})
            // validasi data
            if(cari.length !== 0){
                seleksiSoal
                console.log(cari)
            }else{
                seleksiSoal
                console.log('Data tidak ditemukan', cari)
            }
    }else{
        seleksiSoal
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
}

//perintah untuk menjalankan program
search(2,14,data)
search(10,5,data)
search(5, 17,data2)
search(17,20,data)
search('5', 20,data)
search(5, '20',data)
search(17, 20,data3)