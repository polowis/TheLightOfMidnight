
/**
 * @param {*} message = The error message to print to console
 */
class Exception {
    constructor(message) {
        this.message = message;
        this.name = "Error"; // will be changed in other child classes
    }

    printStackTrace() {
        let caller_line = (new Error().stack.split("\n")[4])
        console.error(this.message);
        console.error("At line " + caller_line)
    }
}

export default Exception;