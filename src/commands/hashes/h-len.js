import { Helper } from '../../shareds/helpers.js'
import { Messages } from '../../shareds/messages.js'
import { HashTable } from '../../data-structures/hash-table.js'
import { AppError, AppSuccess } from '../../shareds/app-response.js'

// HLEN key

export function hashLenCommand(key, clientId, connPool) {
    if (!Helper.isString(key)) {
        return new AppError(Messages.Error.INVALID_KEY);
    }

    connPool[clientId] = connPool[clientId] || {};
    connPool[clientId]["hash"] = connPool[clientId]["hash"] || {};

    if (!(connPool[clientId]["hash"][key] instanceof HashTable)) {
        return new AppError(Messages.Error.KEY_NOT_FOUND);
    }

    const length = connPool[clientId]["hash"][key].size();
    return new AppSuccess(length);
}