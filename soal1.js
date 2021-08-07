let santriIkhwan = ['Sidik', 'Rahmad', 'Syofyan', 'Aldi', 'Kardi']

let [ Lampung, Prabumulih, ...Lain ] = santriIkhwan
let pilih = santriIkhwan.slice(2)
console.log(Lampung);
console.log(Prabumulih);
console.log(pilih);