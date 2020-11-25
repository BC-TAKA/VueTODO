package model

// 全件表示用の構造体
type Listup struct {
	ID   int
	Name string
	Todo string
}

// 全件表示機能以外で使用する構造体
type TODO struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	Todo string `json:"todo"`
}
