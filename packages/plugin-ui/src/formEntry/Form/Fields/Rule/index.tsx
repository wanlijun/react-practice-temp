import {
  Input,
  Checkbox,
  Form,
  Select
} from 'antd';
import {
  IValidType,
  IRuleFormItem
} from '@plugin/data-form';
import styles from './index.module.less';

const { Option } = Select;

const options: IRuleFormItem[] = [
  { type: IValidType.REQUIRED, typeName: '必填' },
  { type: IValidType.POINT, typeName: '小数' },
  { type: IValidType.INTEGER, typeName: '整数' },
  { type: IValidType.TEL_PHONE, typeName: '手机号和座机' },
  { type: IValidType.MIN_LEN, typeName: '手机号' },
  { type: IValidType.PHONE, typeName: '手机号' },
  { type: IValidType.TEL, typeName: '座机' },
  { type: IValidType.REGULAR, typeName: '正则' },
  { type: IValidType.CUSTOM, typeName: '自定义校验函数' },
]
const Rule = ({ name }: { name: (string | number)[] }) => {
  const renderItem = (item: IRuleFormItem, idx: number) => {
    console.log(item, '===???')
    switch (item.type) {
      case 'REGULAR':
        return (
          <div className={styles.flex} key={idx}>
            <Form.Item
              name={[idx, 'check']}>
              <Checkbox value={item.type}>
                {item.typeName}
              </Checkbox>
            </Form.Item>
            <Form.Item
              label="表达式"
              name={[idx, 'value']}>
              <Input />
            </Form.Item>
            <Form.Item
              label="提示信息"
              name={[idx, 'msg']}>
              <Input />
            </Form.Item>
          </div >
        )
      case 'REQUIRED':
      case 'POINT':
      case 'INTEGER':
      case 'ID':
      case 'PHONE':
      case 'TEL':
      case 'TEL_PHONE':
      default:
        return (
          <div className={styles.flex} key={idx}>
            <Form.Item
              name={[idx, 'check']}
              valuePropName="checked">
              <Checkbox value={item.type}>
                {item.typeName}
              </Checkbox>
            </Form.Item>
            <Form.Item
              label="提示信息"
              name={[idx, 'msg']}>
              <Input />
            </Form.Item>
          </div >
        )
    }
  }
  return (
    <div className={styles.rule}>
      <label>规则:</label>
      <div className={styles.ruleList}>
        <Select
          mode="multiple">
          {
            options.map((item) => (
              <Option key={item.type} value={item.type}>
                {item.typeName}
              </Option>
            ))
          }
        </Select>
      </div>
    </div>
  )
}
export default Rule