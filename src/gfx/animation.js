
/**
 * @param src -  the path to the image for this animation
 * @param position - position of the sprite
 * @param size - the size of the sprite in pixels
 * @param speed - speed in frames per second for animating
 * @param frames - an array of frame indexes for animating: [0, 1, 2, 1]
 * @param direction - which direction to move in the sprite map when animating: 'horizontal' (default) or 'vertical'
 * @param once - true to only run the animation once, defaults to false
 */
class Animation {
    constructor(src, position, size, speed, frames, direction, once) {
        this.image = new Image();
        this.image.src = src;
        this.src = src;
        this.position = position;
        this.size = size;
        this.speed = typeof speed === 'number' ? speed : 0;
        this.frames = frames;
        this.direction = direction || 'horizontal';
        this.once = once;
        this._index = 0;

    }
    update(dt) {
        this._index += this.speed*dt;
    }

    /**
     * 
     * @param {*} ctx - HTML canvas element context
     */
    render(ctx) {
        /*
        let frame;
        if(this.speed > 0) {
            let max = this.frames.length
            let idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if(this.once && idx >= max) {
                this.done = true;
                return;
            }
        }
        else {
            frame = 0;
        }

        let x = this.position[0];
        let y = this.position[1];

        if(this.direction == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }*/
        ctx.drawImage(this.image,
            0, 0);
    }
}

export default Animation