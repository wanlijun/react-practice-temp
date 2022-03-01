'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function renderTable(data) {
    const { moduleName } = data;
    return `
    const Demo = () => {
      return <div>${moduleName}</div>
    }
    export default Demo;
  `;
}

exports.renderTable = renderTable;
