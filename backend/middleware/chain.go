package middleware

import "net/http"

func Chain(handler http.Handler) http.Handler {
	handler = CORSMiddleware(handler)
	handler = ErrorHandlingMiddleware(handler)
	handler = LoggingMiddleware(handler)
	return handler
}
