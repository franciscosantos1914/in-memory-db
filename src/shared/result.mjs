export const ok = (value) => ({ value, statusCode: 200 })
export const created = (value) => ({ value, statusCode: 201 })
export const accepted = (value) => ({ value, statusCode: 202 })
export const no_content = (value) => ({ value, statusCode: 204 })
export const bad_request = (value) => ({ value, statusCode: 400 })
export const unauthorized = (value) => ({ value, statusCode: 401 })
export const forbidden = (value) => ({ value, statusCode: 403 })
export const not_found = (value) => ({ value, statusCode: 404 })
export const locked = (value) => ({ value, statusCode: 423 })
export const too_many_requests = (value) => ({ value, statusCode: 429 })
export const internal_server_error = (value) => ({ value, statusCode: 500 })
export const service_unavailable = (value) => ({ value, statusCode: 503 })
export const insufficient_storage = (value) => ({ value, statusCode: 507 })