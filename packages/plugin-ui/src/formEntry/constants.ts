const TYPE_MAP = {
  INPUT: 'Input',
  SELECT: 'Select',
  DATE: 'DatePicker',
  RANGE_DATE: 'DatePicker范围',
  RADIO: 'Radio',
  SWITCH: 'Switch',
  CHECK_BOX: 'Checkbox',
  UPLOAD: 'Upload上传',
  QUILL: '富文本',
  TIME: 'TimePicker',
  RANGE_TIME: 'TimePicker范围',
  CASCADER: 'Cascader级联选择',
  TRANSFER: 'Transfer穿梭框',
  AUTO_COMPLETE: 'AutoComplete自动完成',
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