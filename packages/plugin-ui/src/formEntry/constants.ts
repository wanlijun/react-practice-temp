import {
  IValidType,
  IRuleFormItem,
  IFormItemType
} from '@plugin/data-form';
const TYPE_MAP = {
  [IFormItemType.INPUT]: 'Input',
  [IFormItemType.SELECT]: 'Select',
  [IFormItemType.DATE]: 'DatePicker',
  [IFormItemType.RANGE_DATE]: 'DatePicker范围',
  [IFormItemType.RADIO]: 'Radio',
  [IFormItemType.SWITCH]: 'Switch',
  [IFormItemType.CHECK_BOX]: 'Checkbox',
  [IFormItemType.UPLOAD]: 'Upload上传',
  [IFormItemType.QUILL]: '富文本',
  [IFormItemType.TIME]: 'TimePicker',
  [IFormItemType.CASCADER]: 'Cascader级联选择',
  [IFormItemType.TRANSFER]: 'Transfer穿梭框',
}
const VALID_MAP = {
  POINT: '小数',
  INTEGER: '整数',
  ID: '身份证',
  TEL: '电话号码',
  PHONE: '手机号',
  TEL_PHONE: '电话号码&手机号',
  REGULAR: '正则',
  CUSTOM: '自定义',
}
export const RULE_ITEMS: IRuleFormItem[] = [
  { type: IValidType.REQUIRED, typeName: '必填' },
  { type: IValidType.POINT, typeName: '小数' },
  { type: IValidType.INTEGER, typeName: '整数' },
  { type: IValidType.TEL_PHONE, typeName: '手机号和座机' },
  { type: IValidType.PHONE, typeName: '手机号' },
  { type: IValidType.MIN_LEN, typeName: '最小长度' },
  { type: IValidType.MAX_LEN, typeName: '最大长度' },
  { type: IValidType.WHITESPACE, typeName: '不能全为空格' },
  { type: IValidType.REGULAR, typeName: '正则' },
  { type: IValidType.CUSTOM, typeName: '自定义校验函数' },
]
function transformToOpts(data: any) {
  const list = Object.keys(data).map((item) => {
    return {
      label: data[item],
      value: item
    }
  });
  return list;
}
export const TYPE_MAP_OPTIONS = transformToOpts(TYPE_MAP)