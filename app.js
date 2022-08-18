// Тоглогчийн ээлжийг хадгалах хувьсагчид. 1-р тоглогчийг 0, 2-р тоглогчийг 1-р тэмдэглэв.
var activePlayer = 0; //2-р тоглогч

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагчид
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Програм эхлэхэд бэлтгэе
// id -р элементийг хайж олох  -- Илүү хурдан ажилладаг.
// document.getElementById("score-0").textContent=0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// addEventListener нь тухай event-ийн нэрийн дагуу үйлдэл хийдэг
//   function() нь anonymous function yum
document.querySelector(".btn-hold").addEventListener("click", function () {
  //  activePlayer===0?scores = [diceNumber, ]:scores = [, diceNumber];
});
document.querySelector(".btn-roll").addEventListener("click", function () {
  //Шооны аль талаараа буусныг хадгалах хувьсагч. 1-6 утгыг хувьсагчид санамсаргүйгээр хадгална.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Буусан шооны зургийг дуудах
  diceDom.src = "dice-" + diceNumber + ".png";
  // Буусан шооны зургийг харуулах
  diceDom.style.display = "block";
  // Буусан тооны утга 1-ээс ялгаатай бол тухайн тоог харуулах бөгөөд хэрэв 1== бол 0 болгож, ээлжийг солих
  if (diceNumber !== 1) {
    // Буусан тооны утгыг харуулах
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буулгахад дараагийн тоглогч руу шилжих үед шоог харагдуулахгүй болгох
    diceDom.style.display = "none";
    // Буусан тооны утгыг харуулах
    // Энэ тоглогчийн оноог 0 болгож, дараагийн тоглогчид шилжүүлэх
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
});
