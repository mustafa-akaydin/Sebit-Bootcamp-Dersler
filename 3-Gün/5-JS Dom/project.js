// const button = document.querySelector('button'); //1. Yöntem
// const button = document.querySelector('#buttonİd'); // 2. yöntem
// const button = document.querySelector('.buttonClass') ;// 3. yöntem
const button = document.getElementById("buttonİd"); // 4. YÖntem
// const button = document.getElementsByClassName("buttonClass")[0];// 5.Yöntem

//ilk yöntem
// const button = document.getElementById("buttonİd");
// button.addEventListener('click',() =>{
//     console.log("tıklandı")
// })

//ikinci yöntem

// function add() {
//   console.log("tıklandı");
// }
// console.log(button)

const liElemanları = document.querySelectorAll("li");
console.log(liElemanları);

liElemanları.forEach((eleman) => {
  eleman.addEventListener("click", (e) => {
    // console.log("tıklandı");
    // console.log(e.target);
    // console.log(e);
    //css kodlarını .style ile herşey verilebilir
    e.target.style.color = "blue";
  });
});

const ulDegerleri = document.querySelector("ul");
// console.log(ulDegerleri);
// ulDegerleri.remove();

//tıklandığında liste elemanı silme
// liElemanları.forEach((eleman) => {
//     eleman.addEventListener("click", e => {
//     e.target.remove();
//     });
//   });

const liELemanim = document.createElement("li");

liELemanim.textContent = "JavaScript";
//append sona eleman ekler
//prepend  başa eleman ekler

button.addEventListener("click", () => {
  const liELemanim = document.createElement("li");
  liELemanim.textContent = "JavaScript";
  ulDegerleri.append(liELemanim);
});
