[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

@cheprasov/json-web-worker (v1.0.0)
=========

The library for parse / stringify JSON in different thread via Web Workers.

##### Features:
- The library uses Promises for comfort work with JSON via Web Worker.
- The library will use setTimeout if Web Worker is not supported.
- `Promise.catch` allows to receive an error thrown on json parse/stringify.
- The library is written on TypeScript.


### 1. How to install

```bash
> npm install @cheprasov/json-web-worker
```

```javascript
import { jsonWebWorker } from '@cheprasov/json-web-worker';
```

### 2. Quick examples

#### 2.1. Create SVG QR Code
```javascript
import { jsonWebWorker } from '@cheprasov/json-web-worker';

// Parse via Web Worker
jsonWebWorker.parse('{"a": "b"}')
    .then(result => {
        console.log('Result:', result);
    }).catch(e => {
        console.log('Error:', e);
    });

// Stringify via Web Worker
jsonWebWorker.stringify({ a: 10, b: [1, 2, 3] }, 2)
    .then(result => {
        console.log('Result:', result);
    }).catch(e => {
        console.log('Error:', e);
    });

```

### 3. Documentation

#### import

```javascript
import { jsonWebWorker, parse, stringify } from '@cheprasov/json-web-worker';
```

##### 3.1. `jsonWebWorker.parse(text): Promise` or `parse(text): Promise`

The method executes `JSON.parse` in a thread via Web Worker

See more here https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

**arguments:**

- `text` - `string` - The string to parse as JSON.
- returns `Promise`.

Example:
```javascript
import { jsonWebWorker, parse } from '@cheprasov/worker-thread';

jsonWebWorker.parse('{"a": "b"}')
    .then(result => {
        console.log('Result:', result);
    }).catch(e => {
        console.log('Error:', e);
    });

```

##### 3.2. `jsonWebWorker.stringify(value, space): Promise` or `stringify(value, space): Promise`

The method executes `JSON.stringify` in a thread via Web Worker

See more here https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

**arguments:**

- `value` - `string` - The value to convert to a JSON string.
- `space` - optional, `string` or `number`, object that's used to insert white space into the output JSON string for readability purposes.
- returns `Promise`.

Example:
```javascript
import { jsonWebWorker, parse } from '@cheprasov/worker-thread';

jsonWebWorker.stringify({ a: 10, b: [1, 2, 3] }, 2)
    .then(result => {
        console.log('Result:', result);
    }).catch(e => {
        console.log('Error:', e);
    });

```

## Something does not work

Feel free to fork project, fix bugs, write tests and finally request for pull
