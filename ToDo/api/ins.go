package api

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
	"github.com/raveger/Todo-list/ToDo/model"
)

// INSERT処理を行う関数
func CreateTODO(todo model.TODO, DB *sql.DB) error {
	_, err := DB.Exec(
		`INSERT INTO todolist(name,TODO) VALUES( ? , ? )`,
		todo.Name, todo.Todo,
	)
	if err != nil {
		return err
	}
	return nil
}
