// Тоглогчийн ээлжийг хадгалах хувьсагчид. 1-р тоглогчийг 0, 2-р тоглогчийг 1-р тэмдэглэв.
var activePlayer = 1; //2-р тоглогч

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагчид
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Програм эхлэхэд бэлтгэе
// id -р элементийг хайж олох  -- Илүү хурдан ажилладаг.
// document.getElementById("score-0").textContent=0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// addEventListener нь тухай event-ийн нэрийн дагуу үйлдэл хийдэг
//   function() нь anonymous function yum
document.querySelector(".btn-roll").addEventListener("click", function () {
  //Шооны аль талаараа буусныг хадгалах хувьсагч. 1-6 утгыг хувьсагчид санамсаргүйгээр хадгална.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.src = "dice-" + diceNumber + ".png";
  diceDom.style.display = "block";
  //   alert("Шоо: " + diceNumber);
});
