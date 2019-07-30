var nama = 'best';
var peran = 'Tabib';
var boolNama = Boolean(nama);
var boolPeran = Boolean(peran);

if (boolNama == false && boolPeran == false) {
    console.log('Nama harus diisi!')
} else if (boolNama == true && boolPeran == false) {
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
} else if (boolNama == true && peran.toLocaleLowerCase() == 'ksatria') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if (boolNama == true && peran.toLocaleLowerCase() == 'tabib') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
} else if (boolNama == true && peran.toLocaleLowerCase() == 'penyihir') {
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
}