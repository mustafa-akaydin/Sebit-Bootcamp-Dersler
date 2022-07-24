let email = "cboz@hotmil.com";
console.log(email);

//Birleştirme

let ad = "Mustafa";
let soyad = "AKAYDIN AKAYDIN";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[0]); //Dizi ilk eleman gösterimi
console.log(adSoyad[1]); //dizi 2. eleman gösterimi

//Karakter boyutu
console.log(adSoyad.length);

//string methodlar
console.log(adSoyad.toUpperCase()); //harfleri büyük yapar
console.log(adSoyad.toLowerCase()); //harfleri küçük yapar

//index bulma
let index = adSoyad.indexOf("a"); //baştan sayar
console.log(index);
let indexLast = adSoyad.lastIndexOf("a"); //sondan sayar
console.log(indexLast);

//Slice kullanımı
let ilkisim = adSoyad.slice(0, 8); //şecilen noktalardan değerleri keser
console.log(ilkisim);

//replace kullanımı
let yerdegis = adSoyad.replace(" ","");//ilk gördüğünü değiişir
console.log(yerdegis);

//ReplacceALl kullanımı
let yer=yerdegis.replaceAll(" ","");
console.log(yer);

