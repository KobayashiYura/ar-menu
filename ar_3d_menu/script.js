// ① 操作する要素（3Dモデルとボタン）をHTMLから見つけて準備する
const modelViewer = document.getElementById('food-model');
const btnNormal = document.getElementById('btn-normal');
const btnLarge = document.getElementById('btn-large');

// ② 「普通盛り」ボタンが押されたときの動き
btnNormal.addEventListener('click', () => {
  // 1. 3Dモデルを宇宙飛行士（普通盛りのダミー）に切り替える
  modelViewer.src = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
  
  // 2. ボタンのデザインを切り替える（普通盛りを黒く、大盛りを白く）
  btnNormal.classList.add('active');
  btnLarge.classList.remove('active');
});

// ③ 「大盛り」ボタンが押されたときの動き
btnLarge.addEventListener('click', () => {
  // 1. 3Dモデルをイス（大盛りのダミー）に切り替える
  modelViewer.src = 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Chair/glTF-Binary/Chair.glb';
  
  // 2. ボタンのデザインを切り替える（大盛りを黒く、普通盛りを白く）
  btnLarge.classList.add('active');
  btnNormal.classList.remove('active');
});