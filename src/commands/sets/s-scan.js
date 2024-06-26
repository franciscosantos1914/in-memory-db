import { Helper } from '../../shareds/helpers.js'
import { Messages } from '../../shareds/messages.js'
import { CustomSet } from '../../data-structures/custom-set.js'
import { AppError, AppSuccess } from '../../shareds/app-response.js'

// SSCAN key cursor count

export function scanSetCommand(key, cursor, count, clientId, connPool) {
    if (!Helper.isString(key) || String(key).trim().length === 0) {
        return new AppError(Messages.Error.INVALID_KEY)
    }

    const set = connPool[clientId]?.set[key]
    if (!(set instanceof CustomSet)) {
        return new AppError(Messages.Error.KEY_NOT_FOUND)
    }

    const keys = Array.from(set.values())
    const start = Math.max(0, cursor)
    const end = Math.min(keys.length - 1, cursor + count - 1)

    return new AppSuccess([end + 1, keys.slice(start, end + 1)])
}