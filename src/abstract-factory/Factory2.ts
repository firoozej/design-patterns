import AbstractFactory from "./AbstractFactory";
import ProductA2 from "./ProductA2";
import ProductB2 from "./ProductB2";

class Factory2 implements AbstractFactory{
    createProductA() {
        return new ProductA2();
    }
    createProductB() {
        return new ProductB2();
    }
}
export default Factory2;