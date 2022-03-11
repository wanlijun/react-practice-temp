import { Form, Input, Switch, Space, Divider } from "antd";
import Fields from "../Fields";
import FlexBox from "src/components/FlexBox";
const FormModule = () => {
  return (
    <Form.List
      name="group"
      initialValue={[{ moduleName: "111", moduleFlag: false }]}
    >
      {(fields, { add, remove }) => {
        return fields.map(({ key, name, ...restField }) => {
          return (
            <div key={key}>
              <FlexBox gutter={30}>
                <Form.Item
                  {...restField}
                  label="模块名字"
                  name={[name, "moduleName"]}
                >
                  <Input placeholder="请输入文件名称"></Input>
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="prefix"
                  name={[name, "moduleFlag"]}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </FlexBox>
              <Fields />
              <Divider style={{ marginTop: 0 }} />
            </div>
          );
        });
      }}
    </Form.List>
  );
};
export default FormModule;
