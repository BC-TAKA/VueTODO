// 登録ボタンクリックをトリガーにnameとtodoの値を取得
function createTodo() {
    const name = document.getElementById("valueName").value;
    const todo = document.getElementById("valueTodo").value;
    
    // 入力されたnameを確認して、空であればアラートを出力
    if (name == "") {
        alert("nameを入力してください。");
        return
    }
    // 入力されたtodoを確認して、空であればアラートを出力
    if (todo == "") {
        alert("todoを入力してください。");
        return
    }

    // オブジェクト化
    const createTodo = {
        "name": name,
        "todo": todo
    };

    // fetchでJSON形式に換えてAPIに送信する
    fetch(`http://localhost:8081/todos`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(createTodo),
    }).then((response) => {
        if (response.ok) {
            alert("登録が完了しました。");
        } else {
            alert(err);
        }
    })
    .catch((err) => {
        console.error("err=" + err);
    });
}