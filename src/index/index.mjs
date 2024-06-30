//TODO追加イベント
const onCLickAdd = () => {
    //textboxの値を取得
    const inputText = document.getElementById("add-text").value;
    //inputTextが空の場合、alertを表示
    if  (inputText === "") { return alert("Todoを入力してください"); }
    //textboxの値を空にする
    document.getElementById("add-text").value = "";
    //未完了リストに追加
    createCompleteTodo(inputText);


}

//未完了リストの作成
const createCompleteTodo = (todo) => {
    //↓TODOアイテムを作成
    //li要素を生成
    const li = document.createElement("li");
    //div要素を生成
    const div = document.createElement("div");
    div.className ="list-row";
    //p要素を生成
    const p = document.createElement("p");
    p.innerText = todo;
    p.className = "todo-item";
    //完了ボタンを生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.className = "complete-button";
    //削除ボタンを生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.className = "delete-button";
    //階層構造を作成
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    //li要素を追加
    document.getElementById("incomplete-lists").appendChild(li);
    //↑TODOアイテムを作成

    //完了ボタンにイベント付与
    completeButton.addEventListener("click", () => {
        const completeTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        //戻すボタンを生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.className = "back-button";
        //戻すボタンをli要素の子要素に追加
        completeTarget.firstElementChild.appendChild(backButton);
        //完了リストに移動
        document.getElementById("complete-lists").appendChild(completeTarget);
         //戻すボタンにイベント付与
        backButton.addEventListener("click",() => {
            const todoText = backButton.previousElementSibling.innerText;
            createCompleteTodo(todoText);
            backButton.closest("li").remove();
        })
    });
    //削除ボタンにイベント付与
    deleteButton.addEventListener("click",() => {
        const DeleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-lists").removeChild(DeleteTarget);
    });
}

document.getElementById("add-button").addEventListener("click", onCLickAdd);