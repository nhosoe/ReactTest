import React from "react";

// JavaScriptの中でHTMLのタグを書いていくのを"JSX記法"と言う
// "JSX記法"は一つのタグで囲わないとエラーになる
const App = () => {
  const onClickButton = () => alert();
  return (
    //要素を囲いたいときに使う。画面には影響されない
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// App関数を他でも使用するためにexport
export default App;
