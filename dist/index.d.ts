export { parse, stringify } from './json/JsonThread';
export declare const jsonWebWorker: {
    parse: <T>(text: string) => Promise<T>;
    stringify: (value: any, space?: string | number | undefined) => Promise<string>;
};
