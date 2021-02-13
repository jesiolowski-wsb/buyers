import Buyers from "./buyers";

class BuyerPersonal extends Buyers{
    constructor(name, pesel) {
        super(name);
        this.pesel = pesel;
    }
}

export default BuyerPersonal