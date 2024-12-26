const button1 = document.querySelector(".member1"); 
const button2 = document.querySelector(".member2"); 
const button3 = document.querySelector(".member3"); 
const button4 = document.querySelector(".member4"); 
const buttonreset = document.querySelector(".reset"); 
const img1 = document.querySelector(".pic1");
const img2 = document.querySelector(".pic2");
const img3 = document.querySelector(".pic3");
const img4 = document.querySelector(".pic4");
const topimg = document.querySelector(".top-pic");
let textBox = null;
button1.addEventListener("click", function () {
  resetImg();
  topimg.classList.toggle("gray-filter");
  img2.classList.toggle("gray-filter");
  img3.classList.toggle("gray-filter");
  img4.classList.toggle("gray-filter");
  button2.classList.toggle("gray-filter");
  button3.classList.toggle("gray-filter");
  button4.classList.toggle("gray-filter");
  buttonreset.classList.toggle("gray-filter");
  addTextBox(img1, "我們今天要介紹的是AI如何在醫療方面提供協助-以磁振造影MRI為例。磁振造影的原名為核磁共振。運作的原理是在高磁場的環境下利用電波激發人體內的氫原子，讓他產生共振訊號，並由電腦軟體運算得到三種切面空間的精密影像。是一種無輻射、非侵入性的高階影像學檢查。那AI在磁振造影的具體應用有診斷輔助、影像處理、提高效率和個性化醫療。AI演算法能夠自動識別MRI影像中的病理特徵，也能根據MRI影像對疾病進行分類，例如區分惡性腫瘤與良性腫瘤。那在影像處理的方面，AI可以去除MRI影像中的噪點，同時增強影像細節，和加速影像重建的過程，讓醫生觀察更清晰。整體而言，有了AI的輔助讓整個診斷過程變得更有效率了。");
});
button2.addEventListener("click", function () {
  resetImg();
  topimg.classList.toggle("gray-filter");
  img1.classList.toggle("gray-filter");
  img3.classList.toggle("gray-filter");
  img4.classList.toggle("gray-filter");
  button1.classList.toggle("gray-filter");
  button3.classList.toggle("gray-filter");
  button4.classList.toggle("gray-filter");
  buttonreset.classList.toggle("gray-filter");
  addTextBox(img2, "MRI 相較於電腦斷層(CT)的掃描時間較長，腦部掃描一般需要30分鐘，為了縮短MRI掃描時間，MRI醫學影像設備大廠亦嘗試導入人工智慧，加快MRI影像臨床上任何部位的掃描，技術原理為介入MRI原始訊號轉換成影像訊號的過程，透過人工智慧將原始訊號雜訊濾除，僅重組腦實質掃描訊號為影像，進而達到加速影像重組的目的。開發該類型AI的設備大廠，皆在最新MRI機型中內建邊緣AI ，例如Siemens Healthnieers MRI機型 MAGNETOM Free.Max的AI演算法Deep Resolve、GE MRI機型SIGNA™ Hero的AI演算法AIR™ Recon DL，以及Philips MRI機型MR 5300的AI演算法SmartSpeed，以最新發佈的Philips MRI SmartSpeed演算法為例，導入的結果可以減少50%的掃描時間，應用在腦部退化性疾病掃描上，能夠快速完成腦部MRI掃描減少移動造成的假影，例如帕金森氏症造成四肢無法靜止的病患進行MRI掃描時，快速完成掃描以減少移動造成的假影。");
});
button3.addEventListener("click", function () {
  resetImg();
  topimg.classList.toggle("gray-filter");
  img1.classList.toggle("gray-filter");
  img2.classList.toggle("gray-filter");
  img4.classList.toggle("gray-filter");
  button1.classList.toggle("gray-filter");
  button2.classList.toggle("gray-filter");
  button4.classList.toggle("gray-filter");
  buttonreset.classList.toggle("gray-filter");
  addTextBox(img3, "挑戰二是黑箱問題影響分析mri影像的準確度。我先來解釋一下黑箱效應，如果程式邏輯已經複雜到人類難以解釋的程度，就能稱為黑箱效應。深度學習模型在處理數據時，他的內部運算過程人類無法分析也不知道裡面在幹嘛。舉例來說，模型可以給出診斷結果（像是：這是一個肺炎病例，準確率92%）但無法直接解釋為什麼得出這樣的結論，因此影響到醫生對於ai的信任。<br>那我們提出了兩種解決方法，第一種是可解釋性技術，grad-cam可以聚焦在ai判斷時的區域，讓醫生知道做出這個結論不是毫無根據的。而Lime則是通過簡化模型的輸出，讓ai的局部決策過程變得可解釋。第二種解決方法是結果的二次驗證，在ai生成診斷結果後由醫生進行二次審核，維持ai輔助的原則，而不是ai替代醫生。這兩種方式都能提高分析的準確度，讓醫生以及病患更安心。");
});
button4.addEventListener("click", function () {
  resetImg();
  topimg.classList.toggle("gray-filter");
  img1.classList.toggle("gray-filter");
  img2.classList.toggle("gray-filter");
  img3.classList.toggle("gray-filter");
  button1.classList.toggle("gray-filter");
  button2.classList.toggle("gray-filter");
  button3.classList.toggle("gray-filter");
  buttonreset.classList.toggle("gray-filter");
  addTextBox(img4, "未來，AI也可以在手術過程實時分析，提供關鍵結構的定位和手術建議並記錄手術過程。例如達文西手術系統，它的功能就包含建立放大且具有3D立體超高解析度的視覺影像，若同時搭載了 AI 視覺辨識技術並結合醫院的數據，讓AI在手術當下根據拍攝的畫面分析並給予建議。<br>除此之外，透過AI的使用可以優化臨床試驗。首先，AI可分析過去資料，設計出更完整的臨床試驗，降低未來需要再調整的機率。其次，可以分析病患的基因和病史數據，幫助選擇適合臨床試驗的參與者，提高試驗結果與實際結果的準確率。在過程中，受試者也可配戴具備AI的監測裝置，收集更加完整的數據。最後，透過AI加速分系臨床試驗結果數據，可加速新藥研發到上市的時間。<br>而在關於長期依賴AI是否會導致醫師的臨床技能退化的部分，我們的結論是並不會。以報告中所提及的MRI為例，AI的使用僅是預先將腫瘤的位置圈選出來，縮短整體流程耗費的時間，最後仍會經由醫師確認。");
});
buttonreset.addEventListener("click", function () {
  resetImg();
});
function resetImg(){
  topimg.classList.remove("gray-filter");
  img1.classList.remove("gray-filter");
  img2.classList.remove("gray-filter");
  img3.classList.remove("gray-filter");
  img4.classList.remove("gray-filter");
  button1.classList.remove("gray-filter");
  button2.classList.remove("gray-filter");
  button3.classList.remove("gray-filter");
  button4.classList.remove("gray-filter");
  buttonreset.classList.remove("gray-filter");
  if(textBox){
    textBox.remove();
    textBox = null;
  }
}
function addTextBox(imageElement, text){
  if(textBox){
    textBox.remove();
  }
  textBox = document.createElement("div");
  textBox.classList.add("text-box");
  textBox.innerHTML = text;
  imageElement.appendChild(textBox);
}