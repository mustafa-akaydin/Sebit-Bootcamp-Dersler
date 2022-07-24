function hello() {
  console.log("hello");
}
hello();
hello();
hello();
const canboz = function (ad = "Can", soyad = "Boz") {
  console.log(`AD Soyad:  ${ad} ${soyad}`);
};
canboz("kemal", "doğukan");
canboz();
//eski tipten arrow hafif geçiş
const karealani = function (kenar) {
  return kenar * kenar;
};
let sonuc = karealani(6);
console.log(sonuc);

//Arrow ilk versiyon

//tek parametre ise
// const karealanim=kenar=>{
//   return kenar**2;
// }

//içinde tek satır varsa
const karealanim = (kenar) => kenar ** 2;
console.log(karealanim(7));

const donus = () => {
  return "Mustafa";
};
const stringDonus = () => "Mustafa";
console.log(stringDonus());

//uygulama
//ürrünlerin hamhalinde fiyatı verip vergili halinin toplamını bulan bir hesaplama

//normal function kullanarak
const urunSatis = function (urunler, vergi) {
  let toplam = 0;
  for (let i = 0; i < urunler.length; i++) {
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
};

console.log(urunSatis([10, 20, 30], 0.25));

//arrow function kullanarak
const satis =  (urunler, vergi) =>{
  let top = 0;
  for (let i = 0; i < urunler.length; i++) {
    top += urunler[i] + urunler[i] * vergi;
  }
  return top;
};
console.log(satis([10, 20, 30], 0.25));