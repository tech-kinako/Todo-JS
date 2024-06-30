const onCLickAdd = () => {
    //textboxの値を取得
    const inputText = document.getElementById("add-text").value;
    //textboxの値を空にする
    document.getElementById("add-text").value = "";

    //li要素を生成
    const li = document.createElement("li");
    //div要素を生成
    const div = document.createElement("div");
    div.className ="list-row";
    //p要素を生成
    const p = document.createElement("p");
    p.innerText = inputText;
    
    //階層構造を作成
    div.appendChild(p);
    li.appendChild(div);
    //li要素を追加
    document.getElementById("incomplete-lists").appendChild(li);

}

document.getElementById("add-button").addEventListener("click", onCLickAdd);