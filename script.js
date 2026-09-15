// ① 操作する要素（3Dモデルとボタン）をHTMLから見つけて準備する
const modelViewer = document.getElementById('food-model');
const btnNormal = document.getElementById('btn-normal');
const btnLarge = document.getElementById('btn-large');

// Google公式の安定したテスト用3DモデルURL
const normalModelUrl = 'https://modelviewer.dev/shared-assets/models/Astronaut.glb';
const largeModelUrl = 'https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb';

// ② 「普通盛り」ボタンが押されたときの動き
btnNormal.addEventListener('click', () => {
  modelViewer.src = normalModelUrl;
  btnNormal.classList.add('active');
  btnLarge.classList.remove('active');
});

// ③ 「大盛り」ボタンが押されたときの動き
btnLarge.addEventListener('click', () => {
  modelViewer.src = largeModelUrl;
  btnLarge.classList.add('active');
  btnNormal.classList.remove('active');
});
