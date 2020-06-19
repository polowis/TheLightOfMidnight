import Exception from './Exception'

class AssetNotFoundException extends Exception {
    constructor(message) {
        super(message);
        this.name = "AssetNotFound";
    }
}

export default AssetNotFoundException;