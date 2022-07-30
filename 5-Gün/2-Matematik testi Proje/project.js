const dogruCevap = ["8", "10", "3", "25"]; //doğru cevapları dizinin içine aldık
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
//button tetikleme işlemi başlattık
form.addEventListener("submit", (submit) => {
  //submit default olayını kaldırır
  submit.preventDefault();
  //skor değerini girdik
  let score = 0;
  //cevapların valuesini çekik
  const cevaplar = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  //cevapların indexini aldık
  cevaplar.forEach((cevap, index) => {
    //Evet işareti olanları görüp skora 25 ekledik
    if (cevap === dogruCevap[index]) {
      score += 25;
    }
  });
  //classlist.remove ile calsın aktifliğini kaldırdık
  result.classList.remove("d-none");
  //yazıyı text.content ile yazıyı baştık
  result.querySelector("#percentage").textContent = score + "%";
  if (score === 100) {
    result.querySelector(".bravo").textContent =
      "Bravo! Bir sonraki egzersiz grubuna geçebilirsin";
    document.querySelector(".btn").disabled = true;
  }
});
