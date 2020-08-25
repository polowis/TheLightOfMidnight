
export const NEEDS_THROW_FOR_STACK = !new Error("").stack;
/**
 * @param {*} message = The error message to print to console
 */

class Exception {
    constructor(message) {
        this._e = __getErrorWithStack();
        this.message = message;
        this.name = "Error"; // will be changed in other child classes
    }

    printStackTrace() {
        let caller_line = (new Error().stack.split("\n")[4])
        console.error(this.message);
        console.error("At line " + caller_line)
    }

    __getErrorWithStack() {
        if(NEEDS_THROW_FOR_STACK) try {
            __getErrorWithStack.arguments;
            throw new Error()

        } catch(e) {
            return e;
        }
        return new Error();
    }
}

export default Exception;