type BaseFormItemType = 'INPUT' | 'DATE' | 'SELECT' | 'RANGE_DATE' | 'TIME' | 'RANGE_TIME' | 'CASCADER'
type AdvanceFormItemType = 'AUTO_COMPLETE' | 'CHECK_BOX' | 'INPUT_NUMBER' | 'RADIO' | 'SWITCH' | 'TRANSFER' | 'TREESELECT' | 'UPLOAD'
type FormItemType = BaseFormItemType | AdvanceFormItemType;

export enum ValidType {
  POINT = 'POINT',
  INTEGER = 'INTEGER',
  ID = 'ID',
  TEL = 'TEL',
  PHONE = 'PHONE',
  TEL_PHONE = 'TEL_PHONE',
  REGULAR = 'REGULAR',
  CUSTOM =  'CUSTOM',
}
export interface IOption {
  label: string,
  value: string | boolean
}
export interface IFormItem {
  key: string,
  label?: string,
  type: FormItemType,
  rules?: ValidType[],
  options?: IOption[]
}
export interface IFiled {
  key: string,
  label: string,
  modifyHandle?: 'NONE' | 'KEEP_2_POINT' | 'ADD_WAN_UNIT' | 'ADD_WAN_YUAN_UNIT'
}
export interface IBaseOperation {
  key: string,
  label: string | boolean,
}
export interface IRouterOperation {
  key: string,
  label: string,
  type: 'ROUTER'
  path: string
}
export interface IFormOperation {
  key: string,
  label: string,
  type: 'FORM',
  form: IFormItem[],
}
export interface ICustomOperation {
  key: string,
  label: string,
  type: 'CUSTOM',
}
export interface INoneOperation {
  key: string,
  label: string,
  type: 'NONE',
}
export interface ITable {
  fields: IFiled[],
  operation?: INoneOperation | IRouterOperation | IFormOperation
}
export interface IInputData {
  moduleName: string,
  moduleTitle?: string,
  filters?: IFormItem[],
  operation?: 'ADD' | 'EXPORT'
  table?: ITable
}