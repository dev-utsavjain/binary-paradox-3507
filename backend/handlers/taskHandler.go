package handlers

import (
	"net/http"

	"backend/db"
	"backend/models"
	"backend/utils"
)

func ToggleTaskCompletion(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("id")

	var task models.Task
	if err := db.DB.First(&task, id).Error; err != nil {
		utils.SendError(w, "Task not found", http.StatusNotFound)
		return
	}

	task.Completed = !task.Completed

	if err := db.DB.Save(&task).Error; err != nil {
		utils.SendError(w, "Failed to toggle task completion", http.StatusInternalServerError)
		return
	}

	utils.SendSuccess(w, task)
}
