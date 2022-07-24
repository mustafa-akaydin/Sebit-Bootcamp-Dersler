//array tanımlama
let isimler = ["rıdvan", "can", "elif"];
// console.log(isimler[0]);

// isimler[1] = 'osman';//dizi içi değişim
// console.log(isimler);

let yaslar = [43, 5, 6, 30];
console.log(yaslar[3]);

let rastgele = ["can", "mustafa", 31, 32]; //hem string hemde int kullanılır
console.log(rastgele);
console.log(rastgele.length); //dizi eleman sayısı bulma

//join() ile dizi arası işlem yapılır
let tireli = isimler.join("-");
console.log(tireli);

let virgullu = isimler.join(", ");
console.log(virgullu);

//indexof = sıra bulma
let sira = isimler.indexOf("elif");
console.log(sira);

//concat methodu = birleştirme

let ekleme = isimler.concat(["osman", "merve"]);
console.log(ekleme); //sadece verilen değşikeni değiştirir ana diziyi değiştirmez

//push ana dizine ekler
isimler.push("leyla");
console.log(isimler);

//pop() son indexi siler
isimler.pop();
console.log(isimler);

//splice silinecelk belirlenip silinir
isimler.splice([2]);
console.log(isimler);


