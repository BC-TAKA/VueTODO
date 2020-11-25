fetch('http://localhost:8081/todos')
.then(response => {
    return response.json().then(userInfo => {
        // JSONパースされたオブジェクトが渡される
        const parent = document.getElementById("parent");

        // 一覧をpタグに格納し、削除ボタンとともに表示
        userInfo.forEach(info => {
            const pTag = document.createElement("p");
            const deleteBTN = document.createElement("button");

            Object.entries(info).forEach(([key, val]) => {
                const span = document.createElement("span");
                span.innerText = `${key}: ${val}  `;
                pTag.appendChild(span);
                deleteBTN.textContent = "削除";
                deleteBTN.value = "info.ID";
            });
            parent.appendChild(pTag);
            parent.appendChild(deleteBTN);
            parent.appendChild(document.createElement("br"));
            parent.appendChild(document.createElement("br"));

            // 以下、削除ボタンの処理内容
            deleteBTN.onclick = function() {
                const id = info.ID;
                fetch(`http://localhost:8081/todos?id=${id}`, {
                    method: 'DELETE',
                }).then((response) => {
                    if (response.ok) {
                        alert("削除しました。");
                    } else {
                        alert(err);
                    }
                })
                .catch((err) => {
                    console.error("err =" + err);
                });
            }
        });
    });
});