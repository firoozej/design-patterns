import { expect } from 'chai';
import 'mocha';
import Client from '../../src/abstract-factory/Client.ts';
import Factory1 from "../../src/abstract-factory/Factory1";
import Factory2 from "../../src/abstract-factory/Factory2";

describe('Abstract Factory', () => {

    it('should create ProductA1 & ProductB1 if Factory1 is used', () => {
        const factory = new Factory1();
        const client = new Client(factory);
        expect(client.getResult()).to.equal('ProductA1 created and ProductB1 created');
    });

    it('should create ProductA2 & ProductB2 if Factory2 is used', () => {
        const factory = new Factory2();
        const client = new Client(factory);
        expect(client.getResult()).to.equal('ProductA2 created and ProductB2 created');
    });

});