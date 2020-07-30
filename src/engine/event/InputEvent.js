import KeyboardEvent from './keyboard/Keyboard'

class InputEvent {
    constructor() {

    }

    listen() {
        window.addEventListener('keydown', KeyboardEvent.keyDown)
        window.addEventListener('keyup', KeyboardEvent.keyUp);
    }
}

export default InputEvent;