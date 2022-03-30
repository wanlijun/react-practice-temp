
// type BaseFormItemType = 'INPUT' | 'DATE' | 'SELECT' | 'RANGE_DATE' | 'TIME' | 'CASCADER'
// type AdvanceFormItemType = 'CHECK_BOX' | 'INPUT_NUMBER' | 'RADIO' | 'SWITCH' | 'TREESELECT' | 'UPLOAD' | 'QUILL' | 'CUSTOM'
// type FormItemType = BaseFormItemType | AdvanceFormItemType;

export enum IFormItemType {
  INPUT = 'INPUT',
  DATE = 'DATE',
  SELECT = 'SELECT',
  RANGE_DATE = 'RANGE_DATE',
  CASCADER = 'CASCADER',
  CHECK_BOX = 'CHECK_BOX',
  INPUT_NUMBER = 'INPUT_NUMBER',
  RADIO = 'RADIO',
  SWITCH = 'SWITCH',
  TREESELECT = 'TREESELECT',
  UPLOAD = 'UPLOAD',
  QUILL = 'QUILL',
  TIME = 'TIME',
  TRANSFER = 'TRANSFER',
  CUSTOM = 'CUSTOM',
}

export enum ValidType {
  REQUIRED = 'REQUIRED',
  POINT = 'POINT',
  INTEGER = 'INTEGER',
  ID = 'ID',
  TEL = 'TEL',
  PHONE = 'PHONE',
  TEL_PHONE = 'TEL_PHONE',
  REGULAR = 'REGULAR',
  CUSTOM = 'CUSTOM',
  MIN_LEN = 'MIN_LEN',
  MAX_LEN = 'MAX_LEN',
}
export interface IOption {
  label: string,
  value: string | boolean
}
export interface IFormItem {
  key: string,
  label?: string,
  type: IFormItemType,
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
export interface IRuleFormItem {
  type: ValidType,
  typeName: string,
}
export interface IFields {
  label: string,
  key: string,
  type: IFormItemType,
  rules: IRuleFormItem[]
}
export interface IGroup {
  subModuleName: string,
  prefix: boolean,
  fields: IFields[]
}
export interface IInputData {
  moduleName: string,
  moduleFlag: boolean,
  moduleTitle?: string,
  group: IGroup[]
}
export const a = '123146'