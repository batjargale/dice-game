// Global хувьсагчид
var isGameOver; // Тоглоом дууссан эсэхийг шалгах фц
var activePlayer; //Идэвхитэй тоглогч
var scores; //Хоёр тоглогчийн оноо массив
var roundScore; //Үе дэх оноо
var diceDom = document.querySelector(".dice");

initGame();
//Тоглоомыг эхлүүлэх
function initGame() {
  // Тоглоом эхлэх төлөв
  isNewGame = true;
  // Тоглогчийн ээлжийг хадгалах хувьсагчид. 1-р тоглогчийг 0, 2-р тоглогчийг 1-р тэмдэглэв.
  activePlayer = 0; //2-р тоглогч

  // Тоглогчийн цуглуулсан оноог хадгалах хувьсагчид
  scores = [0, 0];
  //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;
  // Програм эхлэхэд бэлтгэе
  // id -р элементийг хайж олох  -- Илүү хурдан ажилладаг.
  // document.getElementById("score-0").textContent=0;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  // Тоглогчдын нэрийг буцааж гаргах
  document.getElementById("name-0").textContent = "Player-1";
  document.getElementById("name-1").textContent = "Player-2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  // btn-hold, btn-roll товчуудыг идэвхижүүлэх
  // document.querySelector(".btn-hold").disabled = false;
  // document.querySelector(".btn-roll").disabled = false;

  diceDom.style.display = "none";
}
// Шоог шидэх эвент
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
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
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // Тоглогчийн ээлжийг солино
      toglogchinEelj();
    }
  } else {
    alert("Тоглоом дууссан байна.");
    initGame();
  }
});

// Hold товчны эвзнт
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Цуглуулсан оноог үндсэн оноо дээр нэмж өгнө.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // Уг тоглогч хожсон эсэхийг шалгах буюу 100 оноог хүрсэн эсэх
    if (scores[activePlayer] >= 10) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent =
        "WINNER !!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.querySelector(".player-0-panel").classList.toggle("active");
      document.querySelector(".player-1-panel").classList.toggle("active");
      // btn-hold, btn-roll товчуудыг идэвхигүй болгох
      // document.querySelector(".btn-hold").disabled = true;
      // document.querySelector(".btn-roll").disabled = true;
      // Тоглоом эхлэх төлөв
    }

    // HTML кодоос score- гэсэн утгыг хайна
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // Тоглогчийн ээлжийг солино
    toglogchinEelj();
  } else {
    alert("Тоглоом дууссан байна.");
    initGame();
  }
});

// Тоглогчийн ээлжийг солих ** Дуудалтад хэрэглэх фц -- DRY - dont repeat yourself
function toglogchinEelj() {
  // 1 буулгахад дараагийн тоглогч руу шилжих үед шоог харагдуулахгүй болгох
  diceDom.style.display = "none";
  // Дараагийн тоглогчид шилжүүлж, оноог тэглэх
  roundScore = 0;
  // Буусан тооны утгыг харуулах
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

// Шинээр тоглоом эхлүүлэх
document.querySelector(".btn-new").addEventListener("click", initGame);
