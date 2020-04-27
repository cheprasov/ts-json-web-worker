import { parse, stringify } from './JsonThread';

describe('JsonThread', () => {

    describe('parse', () => {

        it('should parse correct json', () => {
            return parse('{"foo": "bar"}').then((result) => {
                expect(result).toEqual({ foo: 'bar' });
            });
        });

        it('should parse correct json as string', () => {
            return parse('"foo"').then((result) => {
                expect(result).toEqual('foo');
            });
        });

        it('should parse correct json as number', () => {
            return parse('42').then((result) => {
                expect(result).toEqual(42);
            });
        });

        it('should parse correct json as boolean', () => {
            return parse('true').then((result) => {
                expect(result).toEqual(true);
            });
        });

        it('should parse correct json as null', () => {
            return parse('null').then((result) => {
                expect(result).toEqual(null);
            });
        });

        it('should parse correct json as empty object', () => {
            return parse('{}').then((result) => {
                expect(result).toEqual({});
            });
        });

        it('should parse correct json as empty array', () => {
            return parse('[]').then((result) => {
                expect(result).toEqual([]);
            });
        });

        it('should catch an error on json parse error', (done) => {
            return parse('{ foo: bar }').catch(e => {
                expect(e).toBeInstanceOf(Error);
                expect(e.message).toEqual('Unexpected token f in JSON at position 2');
                done();
            });
        });

        it('should catch an error on empty json data', (done) => {
            parse('').catch(e => {
                expect(e).toBeInstanceOf(Error);
                expect(e.message).toEqual('Unexpected end of JSON input');
                done();
            });
        });

    });

    describe('stringify', () => {

        it('should stringify object correct', () => {
            return stringify({ foo: 'bar' }).then((result) => {
                expect(result).toEqual('{"foo":"bar"}');
            });
        });

        it('should stringify object with space correct', () => {
            return stringify({ foo: 'bar' }, 2).then((result) => {
                expect(result).toEqual('{\n  "foo": "bar"\n}');
            });
        });

        it('should stringify array correct', () => {
            return stringify([1, 2, 3, 'foo', null]).then((result) => {
                expect(result).toEqual('[1,2,3,"foo",null]');
            });
        });

        it('should stringify number correct', () => {
            return stringify(42).then((result) => {
                expect(result).toEqual('42');
            });
        });

        it('should stringify string correct', () => {
            return stringify('foo').then((result) => {
                expect(result).toEqual('"foo"');
            });
        });

        it('should stringify boolean correct', () => {
            return stringify(true).then((result) => {
                expect(result).toEqual('true');
            });
        });

        it('should catch an error on json stringify error', (done) => {
            const obj: any = { link: null };
            obj.link = obj;

            return stringify(obj).catch(e => {
                expect(e).toBeInstanceOf(Error);
                expect(e.message).toEqual(
                    'Converting circular structure to JSON'
                    + '\n    --> starting at object with constructor \'Object\''
                    + '\n    --- property \'link\' closes the circle'
                );
                done();
            });
        });

    });

});
