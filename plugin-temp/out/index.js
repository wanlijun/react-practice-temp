'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const componentMap = {
    INPUT: 'BaseInput',
    SELECT: 'BaseSelect'
};
function getComponentType(filters) {
    const types = filters === null || filters === void 0 ? void 0 : filters.map((item) => item.type);
    const typeList = new Array(...new Set(types));
    const components = typeList.map((type) => componentMap[type]);
    return components.join(',');
}
function renderForm(filters) {
    let str = ``;
    return filters.map((item) => {
        switch (item.type) {
            case 'INPUT':
                str += `
          <Form.Item
            name="${item.key}"
            label="${item.label}"
          >
          <BaseInput
            placeholder="请输入${item.label}"/>
          </Form.Item>
        `;
                break;
            case 'SELECT':
                str += `
          <Form.Item
            name="${item.key}"
            label="${item.label}"
          >
          <BaseSelect
            hasAll
            options={${item.options}}
          />
        </Form.Item>
        `;
        }
    });
}
function renderTable(data) {
    const { moduleName, filters } = data;
    if (!filters) {
        return '';
    }
    const components = getComponentType(filters);
    return `
    import { ${components}} 'src/components/BaseForm'
    const layOut = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      }
    }
    const ${moduleName} = () => {
      return (
        <Form form={form} {...layOut}>
        <GridLayout
          number={4}>
          ${renderForm(filters)}
        </GridLayout>
        </Form>
    }
    export default ${moduleName};
  `;
}

exports.renderTable = renderTable;
