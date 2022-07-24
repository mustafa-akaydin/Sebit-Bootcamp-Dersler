//int tanımlama
let yaricap =15;
const pi=3.14;

let dairealani = pi*yaricap**2;
console.log(dairealani);

//mod alma
let kalan= yaricap%4 ;
console.log(kalan)

//işlem önceliği
let sonuc = 6*(15-4)**2;
console.log(sonuc);

//sayi arttırma
// sayi=sayi+1;
// console.log(sayi);
// sayi++;
// console.log(sayi);
// ++sayi;
// console.log(sayi);

// ++sayi sayi++ farkkı
let sayi = 13 ;
let sayim = sayi++;
console.log("sayım "+sayim);
let sayimYeni = ++sayi;
console.log("Yeni sayım "+sayimYeni);

//NaN kullanımı

console.log(15/4);
console.log(15/"can");

let birleştirme = "dersi "+ sayi +" kere tekrar ettim";
console.log(birleştirme);




