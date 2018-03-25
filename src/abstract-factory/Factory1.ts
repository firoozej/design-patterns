import AbstractFactory from 'AbstractFactory';
import ProductA1 from "./ProductA1";
import ProductB1 from "./ProductB1";
class Factory1 implements AbstractFactory {
    createProductA() {
        return new ProductA1();
    }
    createProductB() {
        return new ProductB1();
    }
}
export default Factory1;