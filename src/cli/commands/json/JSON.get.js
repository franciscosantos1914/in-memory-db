import { Helper } from '../../../shareds/helpers.js'
import { Messages } from '../../../shareds/messages.js'
import { AppError } from '../../../shareds/app-response.js'

export function JSONGetCommand(document, path, key = null) {
    if (Helper.isString(document) === false) {
        return new AppError(Messages.Error.JSON_GET_CMD_INVALID_DOCUMENT_KEY)
    }
    if (Helper.isString(path) === false) {
        return new AppError(Messages.Error.JSON_GET_CMD_INVALID_PATH_KEY)
    }
    if (key && Helper.isString(key) === false) {
        return new AppError(Messages.Error.JSON_GET_CMD_INVALID_KEY)
    }
}