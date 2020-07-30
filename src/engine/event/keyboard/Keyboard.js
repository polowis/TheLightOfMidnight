const state = {
    keys : {},
    isPressed: false,
    keyCode: -1,
    keyName: ''
}
class Keyboard {
    constructor() {
        this.isPressed = false;
        this.keyCode = -1;
        this.keyName = '';
    }

    /**
     * Get event when key is pressed
     * @param {*} e 
     */
    keyDown(e) {
        state.keys[e.key] = e.type === 'keyup' ? false : true;
        state.isPressed = true;
        state.keyCode = e.keyCode;
        state.keyName = e.key;
    }

    /**
     * Get event when key is released
     * @param {*} e 
     */
    keyUp(e) {
        state.keys[e.key] = e.type === 'keyup' ? false : true;
        state.isPressed = false,
        state.keyCode = -1,
        state.keyName = ''
    }

    /**
     * Return true if key is pressed. 
     */
    isKeyPressed() {
        return state.isPressed;
    }

    /**
     * Return true if arrowDown was pressed
     */
    arrowDown() {
        return state.keyName == 'ArrowDown';
    }

    /**
     * Return true if arrowUp was pressed
     */
    arrowUp() {
        return state.keyName == 'ArrowUp';
    }

    arrowRight() {
        return state.keyName == 'ArrowRight';
    }

    arrowLeft() {
        return state.keyName == 'ArrowLeft';
    }

    /**
     * Single input event
     * @param {*} key 
     */
    isKey(key) {
        return state.keyName == key;
    }

    /**
     * Multi input event
     */
    onKey() {
        return state.keys;
    }
}

const KeyboardEvent = new Keyboard()

export default KeyboardEvent;