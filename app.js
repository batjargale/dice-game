// Тоглогчийн ээлжийг хадгалах хувьсагчид. 1-р тоглогчийг 0, 2-р тоглогчийг 1-р тэмдэглэв.
var activePlayer = 1; //2-р тоглогч

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагчид
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч. 1-6 утгыг хувьсагчид санамсаргүйгээр хадгална.
var dice = Math.floor(Math.random() * 6) + 1;

/* <div class="player-score" id="score-0">43</div> 
1. id -ийн утгыг олохдоо Javascript дээр window.document.querySelector("#.... ") бичнэ.
2. Түүний тестийн утга буюу 43-ийг өөрчлөхдөө   .textContent=   гэж бичнэ.
3. Хэрэв дотор нь HTML бичихийг хүсвэл .innerHTML
*/
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;

// Програм эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log("Шоо: " + dice);
