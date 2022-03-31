import { IFields, IFormItemType, IValidType } from '@plugin/data-form';
import {
  COMPONENT_MAP
} from '../utils/constant';
type ComponentType = keyof typeof COMPONENT_MAP

export function getAndComponentType(data: ComponentType[]) {
  const components = data.map((type) => COMPONENT_MAP[type]);
  return components.join(',');
}
export function getRules(filed: IFields) {
  const rule = filed.rules;
  let result = '';
  rule.forEach((item) => {
    switch (item) {
      case IValidType.REQUIRED:
        result += `
          {
            required: true,
            message: '请输入${filed.label}',
          }
        `
        break;
      case IValidType.POINT:
        result += `
          {
            whitespace: true,
            message: '不能全为空格',
          }
          `
        break;
      case IValidType.INTEGER:
        result += `
          {
            pattern: /^\d+$/,
            message: '只能输入整数',
          }
          `
        break;
      case IValidType.TEL_PHONE:
        result += `
          {
            pattern: /^((\d{3}-?)?\d{8})$|^\d{11}$/,
            message: '请输入正确的联系方式',
          }
        `
        break;
      case IValidType.PHONE:
        result += `
          {
            pattern: /^\d{11}$/,
            message: 请输入正确的手机号,
          }
        `
        break;
      case IValidType.MIN_LEN:
        result += `
          {
            min: 2,
            message: '请输入2-100字${filed.label}',
          }
        `
        break;
      case IValidType.MAX_LEN:
        result += `
          {
            max: 50,
            message: '请输入2-100字${filed.label}',
          }
          `
        break;
      case IValidType.WHITESPACE:
        result += `
          {
            whitespace: true,
            message: '请输入2-100字${filed.label}',
          }
          `
        break;
      case IValidType.REGULAR:
        result += `
          {
            pattern: /^$/,
            message: '',
          }
        `
        break;
      case IValidType.CUSTOM:
        result += `
            {
              validator: this.customValid,
              message: '',
            }
          `
        break;

    }
  })
  return result;
}
export function getFormBody(fields: IFields[], hasEdit = false) {
  let str = ``;
  fields.forEach((item) => {
    const rule = getRules(item);
    const hasRequired = item.rules.includes(IValidType.REQUIRED);
    switch (item.type) {
      case IFormItemType.INPUT:
        str += `
        <Form.Item
          className={styles.col}
          label="${item.label}"
         >
         {getFieldDecorator('${item.key}', {
          ${hasEdit && `initialValue: data.${item.key},`}
          rules: [
            ${rule}
          ]
         })(
          <Input
            placeholder="请输入${item.label}"/>
          </Form.Item>
        )}
        `;
        break;
      case IFormItemType.SELECT:
        str += `
        <Form.Item
          className={styles.col}
          label="${item.label}"
         >
         {getFieldDecorator('${item.key}', {
          ${hasEdit && `initialValue: data.${item.key},`}
          rules: [
            ${rule}
          ]
         })(
          <Select
            placeholder="请选择${item.label}"
          >
            {
              [].map((item) => (
                <Option
                  value={item.value}
                  key={item.value}
                >
                  {item.label}
                </Option>
              ))
            }
          </Select>
        )}
        `;
        break;
      case IFormItemType.DATE:
        str += `
        <Form.Item
          label="发布日期："
          className={styles.col}
        >
          {getFieldDecorator('publishTime', {
            initialValue: data.publishTime ? moment(data.publishTime) : undefined,
            rules: [
              {
                required: true,
                message: '请选择日期',
              }
            ],
          })(
            <DatePicker style={{ width: '100%' }} />
          )}
        </Form.Item>
      `
    }
  });
  return { str };
}