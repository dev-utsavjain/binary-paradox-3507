package views

type UpdateTaskRequest struct {
	Title       string `json:"title,omitempty"`
	Description string `json:"description,omitempty"`
	Completed   *bool  `json:"completed,omitempty"`
}
