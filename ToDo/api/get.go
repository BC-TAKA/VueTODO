package api

import (
	"database/sql"
	"log"

	"github.com/raveger/Todo-list/ToDo/model"
)

// 全件取得を行う関数
func GetTODOs(DB *sql.DB) []model.Listup {
	var (
		id   int
		name string
		TODO string
	)
	baseList := []model.Listup{}

	rows, _ := DB.Query("SELECT * FROM todolist")
	for rows.Next() {
		err := rows.Scan(&id, &name, &TODO)
		if err != nil {
			log.Fatal(err)
		}
		base := model.Listup{
			ID:   id,
			Name: name,
			Todo: TODO,
		}
		baseList = append(baseList, base)
	}
	return baseList
}
