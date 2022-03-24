import {
  Form,
  Input,
  Switch,
  Space,
  Divider,
  Button,
  FormInstance
} from "antd";
import Fields from "../Fields";
import FlexBox from "src/components/FlexBox";
import styles from './index.module.less';
const FormModule = ({ form }: { form: FormInstance }) => {
  const { getFieldValue } = form;
  const enableModule = getFieldValue('moduleFlag')
  console.log(enableModule, '====???')
  return (
    <Form.List
      name="group"
      initialValue={[{ moduleName: "defaultModule", prefix: false }]}
    >
      {(fields, { add, remove }) => {
        return fields.map(({ key, name, ...restField }, idx) => {
          return (
            <div key={key}>
              {
                enableModule &&
                <FlexBox gutter={30}>
                  <Form.Item
                    className={styles.moduleName}
                    {...restField}
                    label="模块名字"
                    name={[name, "subModuleName"]}
                    rules={[
                      {
                        required: true,
                        message: '请输入模块名字'
                      }
                    ]}
                  >
                    <Input placeholder="请输入文件名称"></Input>
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    label="prefix"
                    name={[name, "prefix"]}
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                  <Button onClick={() => remove(idx)}>删除</Button>
                </FlexBox>
              }
              <Fields name={[name, "fields"]} />
              <Divider style={{ marginTop: 0 }} />
              {
                enableModule && idx === fields.length - 1 &&
                <Button className={styles.addBtn} onClick={() => add()}>添加模块</Button>
              }
            </div>
          );
        });
      }}
    </Form.List>
  );
};
export default FormModule;
