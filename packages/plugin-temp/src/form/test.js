import { generateTemp } from './index';
const test = { "moduleName": "Person", "group": [{ "moduleName": "defaultModule", "prefix": false, "fields": [{ "key": "name", "type": "QUILL", "label": "姓名", "rules": ["REQUIRED"] }] }] }
console.log(generateTemp(test), '=====temp')