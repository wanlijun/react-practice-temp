import { Form, Input, Switch } from 'antd';
import FlexBox from 'src/components/FlexBox';
import styles from './index.module.less';

const BaseInfo = () => {
  return (
    <FlexBox
      gutter={20}>
      <Form.Item
        className={styles.moduleName}
        label="文件名字"
        required
        name="moduleName"
        rules={[
          {
            required: true,
            message: '请输入文件名字',
          }
        ]}>
        <Input placeholder="请输入文件名称"></Input>
      </Form.Item>
      <Form.Item
        label="模块化"
        name="moduleFlag"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
    </FlexBox>
  )
}
export default BaseInfo