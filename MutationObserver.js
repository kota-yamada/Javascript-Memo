// 1--------------------------------------------------------------------------------
// 監視ターゲットの取得
// 子要素のDOM変化を監視する時は親要素を取得
var target = document.getElementById('');

// オブザーバーインスタンスの作成
var observer = new MutationObserver(records => {
  records.forEach((record) => {
    // 変化が発生したときの処理を記述
  });
});
// 監視の開始
observer.observe(target, {
  // 対象の子要素の変化を監視
  childList: true
})
// --------------------------------------------------------------------------------


// 2:対象が複数のとき（一覧ページなど）--------------------------------------------------
// 監視ターゲットの取得
var target = document.querySelectorAll('');
for (var i = 0; i < target.length; i++) {
  // オブザーバーインスタンスの作成
  var observer = new MutationObserver(records => {
    records.forEach((record) => {
      // 変化が発生したときの処理を記述
    });
  });
  // 監視の開始
  observer.observe(target[i], {
    // 対象の子要素の変化を監視
    childList: true
  })
}
// --------------------------------------------------------------------------------

// 「監視の開始」は下記でもOK----------------------------------------------------------
// オブザーバの設定
const config = {
    characterData: true,
    subtree: true
};

// 対象ノードとオブザーバの設定を渡す
observer.observe(target, config);
// --------------------------------------------------------------------------------


// childList
// 対象ノードの子ノード（テキストノードも含む）に対する追加・削除を監視する場合はtrue。

// attributes
// 対象ノードの属性に対する変更を監視する場合はtrue。

// characterData
// 対象ノードのデータに対する変更を監視する場合はtrue。

// subtree
// 対象ノードの子孫ノードまで監視する場合はtrue。