package models

import (
	"gorm.io/gorm"
)

type Task struct {
	gorm.Model
	Title       string `gorm:"type:varchar(100);not null" json:"title"`
	Description string `gorm:"type:varchar(500);null" json:"description"`
	Completed   bool   `gorm:"default:false;index" json:"completed"`
}

func (Task) TableName() string {
	return "tasks"
}
