import Exception from './Exception'

class InvalidTypeException extends Exception {
    constructor(message) {
        super(message);
        this.name = "Invalid Type";
    }
}

export default InvalidTypeException;