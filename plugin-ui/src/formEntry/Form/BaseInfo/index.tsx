import { Form, Input, Switch } from 'antd';
import FlexBox from 'src/components/FlexBox';

const BaseInfo = ()=> {
 return (
    <FlexBox
      gutter={20}>
      <Form.Item
        label="文件名字"
        name="moduleName">
          <Input placeholder="请输入文件名称"></Input>
      </Form.Item>
      <Form.Item
        label="模块化"
        name="moduleFlag"
      >
        <Switch/>
      </Form.Item>
    </FlexBox>
 )
}
export default BaseInfo