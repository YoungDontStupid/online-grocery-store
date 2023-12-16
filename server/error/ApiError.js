// Универсальная обработка ошибок

class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    // press f
    static badRequest(message) {
        return new ApiError(404, message)
    }
    // при получении доступа
    static internal(message) {
        return new ApiError(500, message)
    }
    // нет доступа
    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError