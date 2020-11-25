package api

import (
	"database/sql"

	"github.com/raveger/Todo-list/ToDo/model"
)

// UPDATE処理を行う関数
func UpdateTODO(todo model.TODO, DB *sql.DB) error {
	_, err := DB.Exec(
		`UPDATE todolist SET name = ?, TODO = ? WHERE id = ?`,
		todo.Name, todo.Todo, todo.ID,
	)
	if err != nil {
		return err
	}
	return nil
}
