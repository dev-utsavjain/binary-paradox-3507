package utils

import (
	"strings"
)

func IsEmpty(s string) bool {
	return strings.TrimSpace(s) == ""
}

func TruncateString(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen]
}
