import { Form, Input, Switch, Space } from "antd";
import FlexBox from "src/components/FlexBox";

const Fields = () => {
  return (
    <Form.List
      name="fields"
      initialValue={[{ moduleName: "111", moduleFlag: true }]}
    >
      {(fields, { add, remove }) => {
        return fields.map(({ key, name, ...restField }) => {
          return (
            <div key={key}>
              <FlexBox gutter={30}>
                <Form.Item {...restField} label="key" name={[name, "key"]}>
                  <Input placeholder="请输入"></Input>
                </Form.Item>
                <Form.Item
                  {...restField}
                  label="label"
                  name={[name, "label"]}
                  valuePropName="checked"
                >
                  <Input placeholder="请输入"></Input>
                </Form.Item>
              </FlexBox>
            </div>
          );
        });
      }}
    </Form.List>
  );
};
export default Fields;
