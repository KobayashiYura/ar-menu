// 画面の要素を取得する
    const viewer = document.getElementById('menu-viewer');
    const btnNormal = document.getElementById('btn-normal');
    const btnLarge = document.getElementById('btn-large');

    // 「普通盛り」データのURL（宇宙飛行士）
    const modelNormal = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";
    // 「大盛り」データのURL（椅子）
    const modelLarge = "https://modelviewer.dev/shared-assets/models/Chair.glb";

    // 「普通盛り」ボタンが押された時の処理
    btnNormal.addEventListener('click', () => {
      viewer.src = modelNormal; // 3Dモデルを宇宙飛行士に変更
      btnNormal.classList.add('active'); // ボタンの色を緑に変更
    btnLarge.classList.remove('active');
    });

    // 「大盛り」ボタンが押された時の処理
    btnLarge.addEventListener('click', () => {
      viewer.src = modelLarge; // 3Dモデルを椅子に変更
      btnLarge.classList.add('active'); // ボタンの色を緑に変更
    btnNormal.classList.remove('active');
    });