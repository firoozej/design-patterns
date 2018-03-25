import AbstractFactory from 'AbstractFactory';

class Client {
    result: String;
    constructor (factory: AbstractFactory) {
        const productA = factory.createProductA();
        const productB = factory.createProductB();
        this.result = `${productA.productOperation()} and ${productB.productOperation()}`;
    }
    getResult() {
        return this.result;
    }
}
export default Client;