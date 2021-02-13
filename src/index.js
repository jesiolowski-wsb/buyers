import BuyerPersonal from "./components/buyer.personal";
import BuyerCorporate from "./components/buyer.corporate";
import { description } from "./components/buyers";

const corp1 = new BuyerCorporate("Big Corp inc.", 5567152793);
const personal1 = new BuyerPersonal("John Smith", 94120834120);

console.log(description);

console.log("corporate:", corp1);
console.log("personal:", personal1);
