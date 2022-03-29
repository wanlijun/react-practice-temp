'use strict';

const COMPONENT_MAP = {
    INPUT: 'Input',
    SELECT: 'Select',
    DATE: 'DatePicker',
    RANGE_DATE: 'DatePicker',
    TIME: 'TimePicker',
    CASCADER: 'Cascader',
    CHECK_BOX: 'Checkbox',
    RADIO: 'Radio',
    SWITCH: 'Switch',
    TREESELECT: 'TreeSelect',
    UPLOAD: 'Upload',
};

function getAndComponentType(data) {
    const components = data.map((type) => COMPONENT_MAP[type]);
    return components.join(',');
}
function getFormBody(fields) {
    let str = ``;
    fields.forEach((item) => {
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
            options={[]}
          />
        </Form.Item>
        `;
                break;
        }
    });
    return { str };
}

function createTypeSet(data) {
    const types = data.map((item) => item.type);
    return new Array(...new Set(types));
}
function createComponentStr(moduleName, fields, prefix) {
    const typeSet = createTypeSet(fields);
    const quillIdx = typeSet.indexOf('QUILL');
    if (quillIdx >= 0) {
        typeSet.splice(quillIdx, quillIdx);
    }
    // TODO:类型需要优化
    const components = getAndComponentType(typeSet);
    const { str } = getFormBody(fields);
    return `
  import React, { Component } from 'react';
  import { Form, ${components}} from 'antd';
  const layOut = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }
  const ${moduleName} = () => {
    const [form] = Form.useForm();
    return (
      <Form form={form} {...layOut}>
      <GridLayout
        number={4}>
        ${str}
      </GridLayout>
      </Form>
    )
  }
  export default ${moduleName};
`;
}
function generateTemp(data) {
    const { moduleFlag, group, moduleName } = data;
    if (moduleFlag) {
        const result = group.map(({ subModuleName, fields, prefix }) => {
            return [
                {
                    path: `./${subModuleName}/index.js`,
                    render: () => createComponentStr(subModuleName, fields)
                },
                {
                    path: `./${subModuleName}/index.less`,
                    render: () => ''
                },
            ];
        });
        return result.flat(Infinity);
    }
    const fields = data.group[0].fields;
    return [
        {
            path: './index.js',
            render: () => createComponentStr(moduleName, fields)
        },
        {
            path: './index.module.less',
            render: () => ''
        },
    ];
}

module.exports = generateTemp;
