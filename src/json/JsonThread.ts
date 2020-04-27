// @ts-ignore
import { ThreadFactory } from '@cheprasov/worker-thread';

export const parseThread = ThreadFactory.createThread(<T>(text: string): T => {
    return JSON.parse(text);
});

export const parse = <T>(text: string): Promise<T> => {
    return parseThread.exec<T>(text);
}

export const stringifyThread = ThreadFactory.createThread((value: any, space?: string | number): string => {
    return JSON.stringify(value, null, space);
});

export const stringify = (value: any, space?: string | number): Promise<string> => {
    return stringifyThread.exec(value, space);
}
