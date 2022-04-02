import { IFields, IFormItemType, IValidType } from '@plugin/data-form';
import {
  COMPONENT_MAP,
  CUSTOM_COMPONENTS_MAP
} from '../utils/constant';
export type AntdComponentType = keyof typeof COMPONENT_MAP
export type CustomComponentType = keyof typeof CUSTOM_COMPONENTS_MAP
/**
 * 生成antd组件
 * @param data 
 */
export function getAntdComponent(data: AntdComponentType[]) {
  const components = data.map((type) => COMPONENT_MAP[type]);
  return components.join(',');
}
/**
 * 生成自定义组件代码
 * @param data 
 */
export function getCustomComponent(data: CustomComponentType[]) {
  let code = '';
  data.forEach((type) => code += CUSTOM_COMPONENTS_MAP[type]);
  return code;
}
/**
 * 生成规则代码
 * @param filed 
 */
export function getRules(filed: IFields) {
  const rule = filed.rules || [];
  let result = '';
  rule.forEach((item) => {
    switch (item) {
      case IValidType.REQUIRED:
        result += `
          {
            required: true,
            message: '请输入${filed.label}',
          },
        `
        break;
      case IValidType.POINT:
        result += `
          {
            whitespace: true,
            message: '不能全为空格',
          },
          `
        break;
      case IValidType.INTEGER:
        result += `
          {
            pattern: /^\d+$/,
            message: '只能输入整数',
          },
          `
        break;
      case IValidType.TEL_PHONE:
        result += `
          {
            pattern: /^((\d{3}-?)?\d{8})$|^\d{11}$/,
            message: '请输入正确的联系方式',
          },
        `
        break;
      case IValidType.PHONE:
        result += `
          {
            pattern: /^\d{11}$/,
            message: 请输入正确的手机号,
          },
        `
        break;
      case IValidType.MIN_LEN:
        result += `
          {
            min: 2,
            message: '请输入2-100字${filed.label}',
          },
        `
        break;
      case IValidType.MAX_LEN:
        result += `
          {
            max: 50,
            message: '请输入2-100字${filed.label}',
          },
          `
        break;
      case IValidType.WHITESPACE:
        result += `
          {
            whitespace: true,
            message: '请输入2-100字${filed.label}',
          },
          `
        break;
      case IValidType.REGULAR:
        result += `
          {
            pattern: /^$/,
            message: '',
          },
        `
        break;
      case IValidType.CUSTOM:
        result += `
            {
              validator: this.customValid,
              message: '',
            },
          `
        break;

    }
  })
  return result;
}
/**
 * 生成表单组件代码
 * @param item 
 */
export function getFormItemComps(item: IFields) {
  switch (item.type) {
    case IFormItemType.INPUT:
      return `<Input placeholder="请输入${item.label}"/>`;
    case IFormItemType.SELECT:
      return `
        <Select placeholder="请选择${item.label}">
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
      `;
    case IFormItemType.DATE:
      return `<DatePicker style={{ width: '100%' }} />`
    case IFormItemType.RANGE_DATE:
      return `
        <DatePicker.RangePicker
          style={{ width: '100%' }} 
        />`
    case IFormItemType.CASCADER:
      return `
        <Cascader
          options={[]}
          placeholder="请选择${item.label}"
        />
      `
    case IFormItemType.CHECK_BOX:
      return `
        <Checkbox.Group
          options={[]}
        />`
    case IFormItemType.RADIO:
      return `
        <Radio.Group>
          {
            [].map((item) => (
              <Radio
                value={item.value}
                key={item.value}
              >
                {item.label}
              </Radio>
            ))
          }
        </Radio.Group>
      `
    case IFormItemType.TREESELECT:
      return `
        <TreeSelect
          style={{ width: '100%' }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={[]}
          placeholder="请选择${item.label}"
        />
      `
    case IFormItemType.UPLOAD:
      return `
        <BUpload
          accept='application/wps-office.doc,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/wps-office.xlsx,image/*'
          fileType='application/wps-office.doc,application/pdf,application/vnd.ms-works,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/wps-office.xlsx,image/'
          maxSize={1024 * 1024 * 50}
          maxSizeTip="支持.pdf、.Excel、word、图片格式上传，大小不超过50M"
          fileTypeTip="支持.pdf、.Excel、word、图片格式上传，大小不超过50M"
          tip="支持.pdf、.Excel、word、图片格式上传，大小不超过50M"
          limit={1}
        >
        </BUpload>
      `
    case IFormItemType.QUILL:
      return `
        <Quill placeholder="请填写${item.label}" />
      `
    case IFormItemType.TIME:
      return `
        <TimePicker placeholder="请选择${item.label}" />
      `
    case IFormItemType.CUSTOM:
      return `
        <div></div>
      `
  }
}
/**
 * 生成包含的Form.Item的表单组件代码
 * @param fields 
 * @param hasEdit 
 */
export function getFormBody(fields: IFields[], hasEdit = false) {
  let str = ``;
  fields.forEach((item) => {
    const rule = getRules(item);
    const hasRequired = item.rules.includes(IValidType.REQUIRED);
    str += `
      <Form.Item
        label="${item.label}"
        ${hasRequired ? 'required' : ''}
      >
      {getFieldDecorator('${item.key}', {
        ${hasEdit ? `initialValue: data.${item.key},` : ''}
        rules: [
          ${rule}
        ]
      })(
        ${getFormItemComps(item)}
      )}
      </Form.Item>
    `;
  });
  return { str };
}