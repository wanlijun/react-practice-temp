import { IInputData, IFields, FormItemType } from '@plugin/data/form';
import {
  COMPONENT_MAP
} from '../utils/constant';
type ComponentType = keyof typeof COMPONENT_MAP

export function getAndComponentType(data: ComponentType[]) {
  const components = data.map((type) => COMPONENT_MAP[type]);
  return components.join(',');
}
export function getRules(filed: IFields) {
  // const rule = filed.rules
}
export function getFormBody(fields: IFields[]) {
  let str = ``;
  fields.forEach((item) => {
    switch (item.type) {
      case 'INPUT':
        str += `
          <Form.Item
            name="${item.key}"
            label="${item.label}"
          >
          <Input
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
        `
        break;
    }
  });
  return { str };
}