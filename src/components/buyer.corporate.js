import Buyers from "./buyers";

class BuyerCorporate extends Buyers{
    constructor(name, nip) {
        super(name);
        this.nip=nip;
    }
}

export default BuyerCorporate