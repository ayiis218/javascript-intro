# javascript-intro
 Bootcamp at Pijar Camp

# TUGAS week2
1. Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya (kecuali : split, reverse, join, foreach, map).
2. Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:
   ```
   const name = [
      "Abigail", "Alexandra", "Alison",
      "Amanda", "Angela", "Bella",
      "Carol", "Caroline", "Carolyn",
      "Deirdre", "Diana", "Elizabeth",
      "Ella", "Faith", "Olivia", "Penelope"];
   ```
   **Contoh:**\
   searchName("an", 3, callback)

   **Output:**\
   [“Alexandra”,”Amanda”,”Angela”]
3. Buatlah fungsi yang memiliki parameter **nilaiAwal** (number) dan **nilaiAkhir** (number), serta **dataArray** (array). Fungsi tersebut memiliki validasi **nilaiAwal < nilaiAkhir** dan jumlah data dalam **dataArray** harus lebih dari 5. Fungsi tersebut akan mencari data didalam **dataArray** yang memiliki nilai diantara **nilaiAwal** dan **nilaiAkhir**, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

   **Contoh :**
   
   seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])\
   **Output:**\
   [8, 14, 17]

   seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])\
   **Output:**\
   "Nilai akhir harus lebih besar dari nilai awal"

   seleksiNilai(5, 17 , [2, 25, 4])\
   **Output:**\
   "Jumlah angka dalam dataArray harus lebih dari 5"

   seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])\
   **Output:**\
   "Nilai tidak ditemukan"
