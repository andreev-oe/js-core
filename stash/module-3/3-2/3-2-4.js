class AttemptsLimitExceeded extends Error {
    constructor(){
        super('Max attempts limit exceed');
        this.name = 'AttemptsLimitExceeded';
    }
}

class NotFoundError extends Error {
    constructor(){
        super('Not found');
        this.name = 'NotFoundError';
    }
}

class TemporaryError extends Error {
    constructor(){
        super('TemporaryError');
        this.name = 'TemporaryError';
    }
}

function getRepeatableData(getData, key, maxRequestsNumber) {
    try {
        return getData(key)
    } catch (error) {
        if (error instanceof NotFoundError) {
            throw new NotFoundError()
        }
        if (error instanceof TemporaryError) {
            if (typeof maxRequestsNumber === 'undefined') {
                return getRepeatableData(getData, key, maxRequestsNumber)
            }
            maxRequestsNumber--
            if (maxRequestsNumber !== 0) {
                return getRepeatableData(getData, key, maxRequestsNumber)
            }
            throw new AttemptsLimitExceeded()
        }
    }
}

// const getData = (key) => 'hello' + key;
// const res = getRepeatableData(getData, '1', 3); // 'hello1'
