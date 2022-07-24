// console.log("merhaba dünya");//consola yazı yadırmak için yazılır
// var
// let
// const //değişken tanımlama

let gun = 12;
let ay = 9;
let yıl = 1997;
// let gun =15;// let aynı değişken tekrar atanamaz
gun = 15;

console.log(gun, ay, yıl);
console.log(
  "ahmet kerem kantarcı " + gun + "/" + ay + "/" + yıl + " tarihide doğmuştur"
);

const ikincielaraba = 200000;
// ikincielaraba = 130000; //cons tek değer atanabilir
console.log(ikincielaraba);

var a = 5;
var a = 3; //var ile atanan değişken ismi defalarca yazılarbilir
console.log(a);

var c = 5;
console.log("C değeri dışarda: ", c);
{
  var c = 3;
  console.log("C değeri içerde : ", c);
}
console.log("C değeri dışarda: ", c);
//var ile fonksiyon içi yazılsa dahi en son verilen değer alınır

let d = 5;
console.log("d değeri dışarda: ", d);
{
  let d = 3;
  console.log("d değeri içerde : ", c);
}
console.log("d değeri dışarda: ", d);
//let ile fonskiyon içim-ne de yazılsa değer fonksiyonun içinde değer alınıcaksa içerdeki değer dışarıda ise dışarıdaki değer alınır.