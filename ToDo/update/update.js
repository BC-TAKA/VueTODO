function updateBTN() {
    // 全てstringとして取り出している
    const idValue = document.getElementById("idValue").value;
    const nameValue = document.getElementById("nameValue").value;
    const todoValue = document.getElementById("todoValue").value;

    // 入力されたIDが0より大きい整数なら入力内容をオブジェクト化
    if (isFinite(idValue) && 0 < idValue) {
        var todo = {
            "id": idValue,
            "name": nameValue,
            "todo": todoValue
        };
    } else {
        alert("IDが正しくありません");
        return
    }

    fetch('http://localhost:8081/todos', {
        method: "PUT",
        body: JSON.stringify(todo),
    }).then((response) => {
        if (response.ok) {
            alert("内容を更新しました。");
        } else {
            alert(err);
        }
    })
    .catch((err) => {
        console.error("err =" + err);
    });
}